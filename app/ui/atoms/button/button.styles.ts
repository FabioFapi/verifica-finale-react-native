import { StyleSheet } from "react-native";
import { COLORS } from "../../values/color";

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.neutral.medium,
    backgroundColor: "transparent",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "600",
  },
  buttonActive: {
    backgroundColor: COLORS.blue.background,
    borderColor: COLORS.blue.main,
  },
  buttonTextActive: {
    color: COLORS.blue.dark,
  },
});

export default styles;