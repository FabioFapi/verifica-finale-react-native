import { StyleSheet } from "react-native";
import { COLORS } from "../../values/color";

const styles = StyleSheet.create({
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
  sortingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: COLORS.blue.dark,
  },
  pillsContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 25,
  },
});

export default styles;