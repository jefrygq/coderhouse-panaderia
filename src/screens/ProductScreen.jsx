import React from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cart.action';

const ProductScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const product = route.params.product;

  const handleAddItem = () => {
    console.log('adding item');
    console.log(product);
    dispatch(addItem(product));
  }; 
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

        <Button title="Add to cart" onPress={handleAddItem} />
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
