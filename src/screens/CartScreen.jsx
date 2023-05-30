import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';

import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { confirmCart, removeItem } from '../store/actions/cart.action';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  

  const processCheckout = () => {
    console.log('Checkout');
    dispatch(confirmCart(cartItems, total));
  }

  const handleDeleteItem = (item) => {
    console.log('Delete item', item);

    dispatch(removeItem(item.id));
  }


  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <FlatList
          data={cartItems}
          renderItem={({item}) => <CartItem item={item} onDeleteItem={handleDeleteItem} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.totals}>
        <TouchableOpacity onPress={() => processCheckout()} style={styles.checkout}>
          <Text style={styles.total}>Total: ${total}</Text>
          <Text style={styles.checkout}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cart: {
    flex: 2,
    padding: 10,
  },
  totals: {
    flex: 1,
    padding: 10,
  },
  checkout: {
    backgroundColor: '#ccc',
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
})

export default CartScreen;
