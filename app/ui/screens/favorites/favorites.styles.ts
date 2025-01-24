import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../values/color";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: COLORS.blue.dark,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: COLORS.blue.dark,
    flex: 1,
  },
  listContainer: {
    padding: 10,
    paddingBottom: 20,
    gap: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardContainer: {
    width: width / 2 - 15,
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: "center",
  },
});