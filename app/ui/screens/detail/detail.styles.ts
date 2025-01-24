import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../values/color";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: COLORS.blue.dark,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue.dark,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.blue.dark,
  },
  errorText: {
    color: COLORS.white,
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: COLORS.accent.yellow,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  retryButtonText: {
    color: COLORS.blue.dark,
    fontWeight: '600',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
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