import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import OrderItem from '../components/OrderItem';

import {ORDERS} from '../data/orders';

const OrdersScreen = () => {
  const onDeleteOrder = (item) => {
    console.log('Delete order', item);
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={ORDERS}
        renderItem={({item}) => <OrderItem item={item} onDeleteItem={onDeleteOrder}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})

export default OrdersScreen;
