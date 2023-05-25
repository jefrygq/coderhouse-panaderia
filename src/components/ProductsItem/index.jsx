import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

const Index = ({product, onSelected}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(product)}
    >
      <View style={styles.imageContainer}>
        <Image source={{uri: product.image}} style={styles.image}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text>{product.description}</Text>
        <Text style={styles.title}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Index;
