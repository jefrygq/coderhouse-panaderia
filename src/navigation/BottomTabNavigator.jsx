import { StyleSheet } from "react-native";
import CartNavigation from "./CartNavigation";
import ShopNavigation from "./ShopNavigation";
import  { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import OrdersScreen from "../screens/OrdersScreen";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigation = () => {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarShowLabel: false,
    }}>
      <BottomTabs.Screen name="ShopNavigator" 
        component={ShopNavigation} 
        options={{
          tabBarIcon: ({focused}) => (<Ionicons name="home" size={24} color={focused ? 'white' : Colors.secondary} />)
        }}
      />
      <BottomTabs.Screen name="CartNav" 
        component={CartNavigation} 
        options={{
          tabBarIcon: ({focused}) => (<Ionicons name="cart" size={24} color={focused ? 'white' : Colors.secondary} />)
        }}
      />
      <BottomTabs.Screen name="OrdersTab" 
        component={OrdersScreen} 
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (<Ionicons name="list" size={24} color={focused ? 'white' : Colors.secondary} />)
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.primary,
    paddingTop: 15,
    borderTopWidth: 0,
    elevation: 0,
    height: 85,
    position: 'absolute',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 0},
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  }
});