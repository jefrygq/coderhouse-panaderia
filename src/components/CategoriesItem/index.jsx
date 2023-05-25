import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import styles from './styles';

export default CategoriesItem = ({item, onSelected}) => {
  return (
    <View style={[styles.categoryItem, {backgroundColor: item.color}]}>
      <TouchableOpacity 
        style={styles.container}
        onPress={() => onSelected(item)}
      >
        <View style={styles.textContainer}>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.img}} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
