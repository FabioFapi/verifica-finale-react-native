import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './products.styles';
import { COLORS } from '../../values/color';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface CartCardProps {
  cart: Cart;
  selected: boolean;
  onPress: () => void;
  onAddFavorite: () => void;
}

const Card = ({ cart, selected, onAddFavorite, onPress }: CartCardProps) => {
  return (
      <View>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>USER CART: {cart.userId}</Text>
            </View>
            <Ionicons
                onPress={onAddFavorite}
                name={selected ? 'heart-sharp' : 'heart-outline'}
                size={28}
                color={COLORS.accent.yellow}
            />
          </View>
          <View style={styles.containerImage}>
            <Image
                source={{
                  uri: 'https://www.pngall.com/wp-content/uploads/5/Empty-Red-Shopping-Cart-PNG-Picture.png',
                }}
                style={styles.imageStyle}
            />
          </View>
          <Text style={styles.infoText}>Cart products: {cart.totalProducts}</Text>
          <Text style={styles.infoText}>Total cost: {cart.total} $</Text>
        </View>

        <TouchableOpacity style={styles.buyCartButton} onPress={onPress}>
          <Text style={styles.buyCartButtonText}>
            BUY CART {cart.discountedTotal} $
          </Text>
        </TouchableOpacity>
      </View>
  );
};

export default memo(Card);