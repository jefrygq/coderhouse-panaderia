import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';

const CartNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShadowVisible: false,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

export default CartNavigation;
