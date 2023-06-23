import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import { useSelector } from 'react-redux';


const MainNavigation = () => {
  const userId = useSelector(state => state.auth.userId);

  return (
    <NavigationContainer>
      {userId ? <BottomTabNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default MainNavigation;
