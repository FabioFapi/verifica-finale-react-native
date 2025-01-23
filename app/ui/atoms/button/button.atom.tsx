import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./button.styles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isActive?: boolean;
}

const Button = ({ onPress, title, isActive = false }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.buttonActive]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;