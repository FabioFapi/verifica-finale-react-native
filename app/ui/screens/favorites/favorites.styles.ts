import { StyleSheet } from "react-native";
import { COLORS } from "../../values/color";

export const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: COLORS.blue.dark,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: COLORS.blue.dark,
    height: "100%",
  },
  listContainer: {
    padding: 10,
    gap: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  cardContainer: {
    marginBottom: 10,
  },
});