import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './genericCard.styles';

interface Props {
  title: string;
  subTitle: string;
  backgroundColor: string;
  image: any;
  onPress?: () => void;
}

export const GenericCard = ({ title, subTitle, backgroundColor, image, onPress }: Props) => {
  return (
    <TouchableOpacity
      disabled={!onPress}
      style={[
        styles.container,
        { backgroundColor: backgroundColor ?? '#fff' },
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.containerImage}>
        <Image
          source={image ?? require('../../../../assets/images/logo.jpg')}
          style={styles.image}
        />
      </View>


      <View style={styles.containerDescription}>
        <Text style={styles.title}>{title ?? 'Titolo mancante'}</Text>
        <Text style={styles.subTitle}>{subTitle ?? 'Descrizione mancante'}</Text>
      </View>
    </TouchableOpacity>
  );
};