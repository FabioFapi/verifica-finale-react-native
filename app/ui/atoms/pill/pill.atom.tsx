import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./pill.styles";
import {
  getCategoryColor,
  getCategoryTextColor,
} from "../../values/category.color";
import { COLORS } from "../../values/color";

interface PillProps {
  textContent: string;
  selected: boolean;
  onPress: () => void;
}

const Pill = ({ textContent, selected, onPress }: PillProps) => {
  const backgroundColor = selected
    ? getCategoryColor(textContent)
    : "transparent";
  const textColor = selected ? getCategoryTextColor(textContent) : COLORS.white;

  return (
    <TouchableOpacity
      style={[
        styles.pill,
        {
          backgroundColor: backgroundColor,
          borderColor: getCategoryColor(textContent),
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.pillText, { color: textColor }]}>{textContent}</Text>
    </TouchableOpacity>
  );
};

export default Pill;