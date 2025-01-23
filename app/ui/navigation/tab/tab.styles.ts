import { StyleSheet } from "react-native";
import { COLORS } from "../../values/color";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.blue.dark,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "600",
  },
  tabBar: {
    backgroundColor: COLORS.blue.dark,
    borderTopWidth: 0,
    elevation: 0,
    height: 60,
    paddingBottom: 10,
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const tabBarColors = {
  active: COLORS.blue.background,
  inactive: COLORS.neutral.medium,
};