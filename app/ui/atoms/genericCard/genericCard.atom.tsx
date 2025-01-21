import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { styles } from './genericCard.styles';

interface Props {
  title: string;
  subTitle: string;
  backgroundColor: string;
  image: any;
  onPress?: () => void;
}

export const GenericCard = ({ title, subTitle, backgroundColor, image, onPress }: Props) => {
  const [loading, setLoading] = useState(false);

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
        {loading ? (
          <ActivityIndicator size="small" color="#000" style={styles.imageLoader} />
        ) : null}
        <Image
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          source={image}
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