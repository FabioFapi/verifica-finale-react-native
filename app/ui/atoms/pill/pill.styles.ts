import { StyleSheet } from "react-native";
import { COLORS } from "../../values/color";

const styles = StyleSheet.create({
  pill: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 60,
  },
  pillText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    textAlignVertical: "center",
    textAlign: "center",
  },
  pillUnselected: {
    borderColor: COLORS.neutral.light,
    backgroundColor: "transparent",
  },
});

export default styles;