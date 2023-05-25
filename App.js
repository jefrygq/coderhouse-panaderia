import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </Provider>
  );
}