import { useState, useCallback } from "react";
import { PREFERRED_PRODUCTS } from "../../core/storage/type";
import { storage } from "../../core/storage/storage";
import Product from "../../models/product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const refreshProducts = useCallback(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setInitialProducts(data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  const loadFavorites = useCallback(async () => {
    try {
      const storedFavorites = storage.getItem(PREFERRED_PRODUCTS);
      const parsedFavorites = storedFavorites
        ? JSON.parse(storedFavorites)
        : [];
      setFavoriteIds(parsedFavorites);

      if (parsedFavorites.length > 0 && products.length === 0) {
        await refreshProducts();
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  }, [products.length, refreshProducts]);

  const addFavorite = useCallback(
    async (item: Product) => {
      const updatedFavorites = favoriteIds.includes(item.id)
        ? favoriteIds.filter((id) => id !== item.id)
        : [...favoriteIds, item.id];

      setFavoriteIds(updatedFavorites);
      storage.setItem(PREFERRED_PRODUCTS, JSON.stringify(updatedFavorites));
    },
    [favoriteIds],
  );

  return {
    products,
    setProducts,
    initialProducts,
    setInitialProducts,
    favoriteIds,
    refreshProducts,
    loadFavorites,
    addFavorite,
  };
};