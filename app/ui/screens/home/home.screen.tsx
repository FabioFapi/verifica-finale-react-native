import React, { useCallback, useEffect, useState, useMemo } from "react";
import {
    Animated,
    FlatList,
    SafeAreaView,
    View,
    RefreshControl,
    Text
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Screen } from "../../navigation/types";
import Card from "../../atoms/products/products.atom";
import styles from "./home.styles";
import { useProducts } from "../../hook/useProducts.facade";
import Button from "../../atoms/button/button.atom";
import Pill from "../../atoms/pill/pill.atom";
import Product from "../../../models/product";
import { COLORS } from "../../values/color";
import ScrollView = Animated.ScrollView;

type HomeScreenProps = {
    navigation: NavigationProp<any>;
};

export enum SortType {
    ASCENDING = "ASCENDING",
    DESCENDING = "DESCENDING",
    INITIAL = "INITIAL",
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const [category, setCategory] = useState<string>("all");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [activeSort, setActiveSort] = useState<SortType | null>(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const {
        initialProducts,
        favoriteIds,
        refreshProducts,
        loadFavorites,
        addFavorite,
    } = useProducts();

    const categories = useMemo(() => {
        if (!initialProducts) return [{ id: "all", name: "all" }];

        const categorySet = new Set(initialProducts.map((product) => product.category));
        return [
            { id: "all", name: "all" },
            ...Array.from(categorySet).map((categoryName, index) => ({
                id: index.toString(),
                name: categoryName,
            })),
        ];
    }, [initialProducts]);

    const onFilterApply = useCallback(
        (type: SortType) => {
            if (!initialProducts) return;

            let sorted: Product[];
            switch (type) {
                case SortType.ASCENDING:
                    sorted = [...filteredProducts].sort((a, b) => a.rating.rate - b.rating.rate);
                    break;
                case SortType.DESCENDING:
                    sorted = [...filteredProducts].sort((a, b) => b.rating.rate - a.rating.rate);
                    break;
                case SortType.INITIAL:
                default:
                    sorted = category === "all"
                        ? initialProducts
                        : initialProducts.filter((product) => product.category === category);
                    break;
            }
            setFilteredProducts(sorted);
            setActiveSort(type === SortType.INITIAL ? null : type);
        },
        [filteredProducts, category, initialProducts],
    );

    const onCategorySelected = useCallback(
        (selectedCategory: string) => {
            setCategory(selectedCategory);
            let filtered = selectedCategory === "all"
                ? initialProducts
                : initialProducts.filter((product) => product.category === selectedCategory);

            if (activeSort === SortType.ASCENDING) {
                filtered = [...filtered].sort((a, b) => a.rating.rate - b.rating.rate);
            } else if (activeSort === SortType.DESCENDING) {
                filtered = [...filtered].sort((a, b) => b.rating.rate - a.rating.rate);
            }

            setFilteredProducts(filtered);
        },
        [initialProducts, activeSort],
    );

    const renderProduct = useCallback(
        ({ item }: { item: Product }) => (
            <Card
                product={item}
                isFavorite={favoriteIds.includes(item.id)}
                onAddFavorite={() => addFavorite(item)}
                {...item}
                onPress={() => {
                    if (!item.id) return;
                    navigation.navigate(Screen.Detail, { id: item.id });
                }}
            />
        ),
        [favoriteIds, addFavorite, navigation],
    );

    const loadData = useCallback(async (isRefresh = false) => {
        try {
            if (isRefresh) {
                setIsRefreshing(true);
            }

            await Promise.all([refreshProducts(), loadFavorites()]);

            // Reset filters after refresh
            setCategory("all");
            setActiveSort(null);
            setFilteredProducts(initialProducts || []);
        } catch (error) {
            console.error("Error refreshing products:", error);
        } finally {
            setIsRefreshing(false);
        }
    }, [refreshProducts, loadFavorites, initialProducts]);

    useEffect(() => {
        return navigation.addListener("focus", () => {
            loadData();
        });
    }, [loadData, navigation]);

    useEffect(() => {
        setFilteredProducts(initialProducts || []);
    }, [initialProducts]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sortingContainer}>
                <Button
                    onPress={() => onFilterApply(SortType.INITIAL)}
                    title="Initial"
                    isActive={activeSort === null}
                />
                <Button
                    onPress={() => onFilterApply(SortType.ASCENDING)}
                    title="Ascending"
                    isActive={activeSort === SortType.ASCENDING}
                />
                <Button
                    onPress={() => onFilterApply(SortType.DESCENDING)}
                    title="Descending"
                    isActive={activeSort === SortType.DESCENDING}
                />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.pillsContainer}
            >
                {categories.map((cat) => (
                    <Pill
                        key={cat.id}
                        textContent={cat.name}
                        selected={category === cat.name}
                        onPress={() => onCategorySelected(cat.name)}
                    />
                ))}
            </ScrollView>
            {filteredProducts.length > 0 ? (
                <FlatList
                    data={filteredProducts}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={() => loadData(true)}
                            colors={[COLORS.white]}
                            tintColor={COLORS.white}
                        />
                    }
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No products found</Text>
                </View>
            )}
        </SafeAreaView>
    );
};