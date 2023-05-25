import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default CartItem = ({item, onDeleteItem}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text>Qty: {item.qty}</Text>
          <Text>Price: {item.qty * item.price}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => (onDeleteItem(item))}>
        <Ionicons name="ios-trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}
