import React, { useEffect } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import OrderItem from '../components/OrderItem';

import { getOrders } from '../store/actions/orders.action';
import { useDispatch, useSelector } from 'react-redux';

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.list);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const onDeleteOrder = (item) => {
    console.log('Delete order', item);
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={orders}
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
