import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {CART} from '../data/cart';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const processCheckout = () => {
    console.log('Checkout');
  }

  const handleDeleteItem = (item) => {
    console.log('Delete item', item);
  }


  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <FlatList
          data={CART}
          renderItem={({item}) => <CartItem item={item} onDeleteItem={handleDeleteItem} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.totals}>
        <TouchableOpacity onPress={() => processCheckout()} style={styles.checkout}>
          <Text style={styles.total}>Total: $0.00</Text>
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
