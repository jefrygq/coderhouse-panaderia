import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import styles from './styles';

const formatDate = (dateUnix) => {
  let date = new Date(dateUnix);
  return date.toLocaleDateString();
};

const OrderItem = ({item, onDeleteItem}) => {
  return (
    <View style={styles.item}>
      <Text>{formatDate(item.date)}</Text>
      <Text>{item.total}</Text>
    </View>
  );
}

export default OrderItem;
