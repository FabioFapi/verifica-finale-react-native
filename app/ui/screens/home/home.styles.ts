import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../values/color";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
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
  sortingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: COLORS.blue.dark,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white.concat('20'),
  },
  pillsContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white.concat('20'),
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

export default styles;