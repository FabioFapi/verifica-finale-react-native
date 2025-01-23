import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../values/color";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: COLORS.blue.dark,
  },
  backButton: {
    marginLeft: 16,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    width: width,
    height: width * 0.8,
    backgroundColor: COLORS.white,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    padding: 20,
  },
  categoryPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 14,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: COLORS.white,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 8,
  },
  ratingText: {
    fontSize: 20,
    color: COLORS.white,
    opacity: 0.9,
  },
  totalRatingsText: {
    fontSize: 20,
    color: COLORS.white,
    opacity: 0.6,
  },
  price: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 24,
  },
  divider: {
    height: 1,
    marginVertical: 24,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: COLORS.white,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: COLORS.white,
    opacity: 0.8,
  },
});