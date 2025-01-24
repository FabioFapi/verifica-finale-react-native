import { StyleSheet } from 'react-native';
import { COLORS } from '../../values/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue.background,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.white,
  },
  containerImage: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  imageStyle: {
    width: 64,
    height: 64,
  },
  infoText: {
    fontSize: 16,
    color: COLORS.white,
    marginTop: 8,
  },
  buyCartButton: {
    marginTop: 8,
    padding: 12,
    backgroundColor: COLORS.primary.red,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  buyCartButtonText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;