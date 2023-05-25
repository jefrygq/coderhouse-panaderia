import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ProductScreen = ({navigation, route}) => {
  const product = route.params.product;

  return (
    <View>
      <View>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text>{product.name}</Text>
        <Text>{product.description}</Text>
        <Text>{product.weight}</Text>
        <Text>{product.Price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  textContainer: {
    padding: 10
  },
})

export default ProductScreen;
