import React from "react";
import { Text } from "react-native";
import styles from "./button.styles";

interface ButtonTextProps {
    title: string;
    isActive?: boolean;
}

const ButtonText = ({ title, isActive = false }: ButtonTextProps) => {
    return (
        <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
            {title}
        </Text>
    );
};

export default ButtonText;