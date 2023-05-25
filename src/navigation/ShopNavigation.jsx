import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductScreen from '../screens/ProductScreen';

import Colors from '../constants/colors';

const ShopNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Category" 
        component={CategoryScreen} 
        options={({route}) => ({title: route.params.category.name})}
      />
      <Stack.Screen name="Product" 
        component={ProductScreen} 
        options={({route}) => ({title: route.params.product.name})}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigation;
