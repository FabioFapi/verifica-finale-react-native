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
    selected?: boolean;
    onPress: () => void;
}

const Pill = ({
                  textContent,
                  selected = false,
                  onPress
              }: PillProps) => {
    const backgroundColor = selected
        ? getCategoryColor(textContent)
        : "transparent";

    const textColor = selected
        ? getCategoryTextColor(textContent)
        : COLORS.neutral.medium;

    const borderColor = getCategoryColor(textContent);

    return (
        <TouchableOpacity
            style={[
                styles.pill,
                styles.pillUnselected,
                {
                    backgroundColor,
                    borderColor,
                },
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.pillText,
                    { color: textColor }
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
            >
                {textContent}
            </Text>
        </TouchableOpacity>
    );
};

export default Pill;