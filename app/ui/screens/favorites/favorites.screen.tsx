import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainParamList, Screen } from "../../navigation/types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { styles } from "./favorites.styles";
import { useProducts } from "../../hook/useProducts.facade";
import Card from "../../atoms/products/products.atom";
import { COLORS } from "../../values/color";
import Product from "../../../models/product";

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Favorites>;
}

const FavoritesScreen = ({ navigation }: Props) => {
  const { products, favoriteIds, refreshProducts, loadFavorites, addFavorite } =
    useProducts();
  const [isLoading, setIsLoading] = useState(true);

  const favorites = useMemo(
    () => products.filter((product) => favoriteIds.includes(product.id)),
    [products, favoriteIds],
  );

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <Card
        product={item}
        onAddFavorite={() => addFavorite(item)}
        isFavorite={favoriteIds.includes(item.id)}
        onPress={() => {
          navigation.navigate(Screen.Detail, {
            id: item.id,
          });
        }}
      />
    ),
    [addFavorite, favoriteIds, navigation],
  );

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await Promise.all([refreshProducts(), loadFavorites()]);
      setIsLoading(false);
    };

    return navigation.addListener("focus", () => {
      loadData();
    });
  }, [loadFavorites, navigation, refreshProducts]);

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color={COLORS.white} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      ) : (
        <View style={styles.activityIndicatorContainer}>
          <Text style={{ color: COLORS.white }}>
            Your favorite products will appear here
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;