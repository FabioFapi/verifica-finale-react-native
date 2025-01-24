import React from "react";
import { TouchableOpacity } from "react-native";
import ButtonText from "./button.text";
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
        <ButtonText
            title={title}
            isActive={isActive}
        />
      </TouchableOpacity>
  );
};

export default Button;