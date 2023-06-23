import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigation from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}