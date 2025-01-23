import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  Animated,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import styles from "./detail.styles";
import { MainParamList, Screen } from "../../navigation/types";
import { Ionicons } from "@expo/vector-icons";
import ScrollView = Animated.ScrollView;
import { COLORS } from "../../values/color";
import {
  getCategoryColor,
  getCategoryTextColor,
} from "../../values/category.color";
import Product from "../../../models/product";

type DetailsScreenProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<MainParamList, Screen.Detail>;
};

export const DetailScreen = ({ navigation, route }: DetailsScreenProps) => {
  const [product, setProduct] = useState<Product>();
  const { id } = route.params;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
      ),
      title: "",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product?.image }}
            style={styles.image}
            resizeMode="contain"
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
              ({product?.rating.count})
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

          <Text style={styles.descriptionTitle}>
            Product&#39;s description:
          </Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};