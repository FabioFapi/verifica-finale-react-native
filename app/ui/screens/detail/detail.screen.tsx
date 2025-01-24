import React, { useEffect, useState } from "react";
import {
    Text,
    SafeAreaView,
    Animated,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MainParamList, Screen } from "../../navigation/types";
import Product from "../../../models/product";
import { COLORS } from "../../values/color";
import {
    getCategoryColor,
    getCategoryTextColor,
} from "../../values/category.color";
import styles from "./detail.styles";

type DetailsScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<MainParamList, Screen.Detail>;
};

export const DetailScreen = ({ navigation, route }: DetailsScreenProps) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = route.params;

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }
                const json = await response.json();
                setProduct(json);
            } catch (err) {
                console.error(err);
                setError(err instanceof Error ? err.message : 'Product fetch failed');
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={navigation.goBack}
                    style={styles.backButton}
                    accessibilityLabel="Go back"
                >
                    <Ionicons name="arrow-back" size={24} color={COLORS.white} />
                </TouchableOpacity>
            ),
            title: "DetailPage",
            headerStyle: { backgroundColor: COLORS.blue.dark },
        });
    }, [navigation]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.accent.yellow} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.retryButton}
                >
                    <Text style={styles.retryButtonText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContainer}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product?.image }}
                        style={styles.image}
                        resizeMode="contain"
                        accessibilityLabel={`Image of ${product?.title}`}
                    />
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{product?.title}</Text>

                    <View
                        style={[
                            styles.categoryPill,
                            { backgroundColor: getCategoryColor(product?.category || "") },
                        ]}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                { color: getCategoryTextColor(product?.category || "") },
                            ]}
                        >
                            {product?.category}
                        </Text>
                    </View>

                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={20} color={COLORS.accent.yellow} />
                        <Text style={styles.ratingText}>{product?.rating.rate}/5</Text>
                        <Text style={styles.totalRatingsText}>
                            ({product?.rating.count} reviews)
                        </Text>
                    </View>

                    <Text
                        style={[
                            styles.price,
                            { color: getCategoryColor(product?.category || "") },
                        ]}
                    >
                        {product?.price?.toFixed(2)}€
                    </Text>

                    <View
                        style={[
                            styles.divider,
                            { backgroundColor: getCategoryColor(product?.category || "") },
                        ]}
                    />

                    <Text style={styles.descriptionTitle}>Product Description:</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
};