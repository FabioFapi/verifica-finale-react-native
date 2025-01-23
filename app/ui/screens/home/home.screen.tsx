import React, { useCallback, useEffect, useState } from "react";
import { Animated, FlatList, SafeAreaView, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Screen } from "../../navigation/types";
import Card from "../../atoms/products/products.atom";
import styles from "./home.styles";
import { useProducts } from "../../hook/useProducts.facade";
import Button from "../../atoms/button/button.atom";
import Pill from "../../atoms/pill/pill.atom";
import Product from "../../../models/product";
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
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([
    { id: "all", name: "all" },
  ]);

  const {
    initialProducts,
    favoriteIds,
    refreshProducts,
    loadFavorites,
    addFavorite,
  } = useProducts();

  const onFilterApply = useCallback(
    (type: SortType) => {
      if (!filteredProducts) return;
      let sorted;
      switch (type) {
        case SortType.ASCENDING:
          sorted = [...filteredProducts].sort(
            (a, b) => a.rating.rate - b.rating.rate,
          );
          break;
        case SortType.DESCENDING:
          sorted = [...filteredProducts].sort(
            (a, b) => b.rating.rate - a.rating.rate,
          );
          break;
        case SortType.INITIAL:
          sorted =
            category === "all"
              ? initialProducts
              : initialProducts.filter(
                (product) => product.category === category,
              );
          break;
      }
      setFilteredProducts(sorted);
    },
    [filteredProducts, category, initialProducts],
  );

  const onCategorySelected = useCallback(
    (selectedCategory: string) => {
      setCategory(selectedCategory);
      let filtered =
        selectedCategory === "all"
          ? initialProducts
          : initialProducts.filter(
            (product) => product.category === selectedCategory,
          );

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

  useEffect(() => {
    if (initialProducts) {
      const categories = new Set(
        initialProducts.map((product) => product.category),
      );
      const categoryList = Array.from(categories).map(
        (categoryName, position) => ({
          id: position.toString(),
          name: categoryName,
        }),
      );
      setCategories([{ id: "all", name: "all" }, ...categoryList]);
    }
  }, [initialProducts]);

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([refreshProducts(), loadFavorites()]);
    };

    return navigation.addListener("focus", () => {
      loadData();
    });
  }, [refreshProducts, loadFavorites, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sortingContainer}>
        <Button
          onPress={() => {
            onFilterApply(SortType.INITIAL);
            setActiveSort(null);
          }}
          title="Initial"
          isActive={activeSort === null}
        />
        <Button
          onPress={() => {
            onFilterApply(SortType.ASCENDING);
            setActiveSort(SortType.ASCENDING);
          }}
          title="Ascending"
          isActive={activeSort === SortType.ASCENDING}
        />
        <Button
          onPress={() => {
            onFilterApply(SortType.DESCENDING);
            setActiveSort(SortType.DESCENDING);
          }}
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
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};