import {createStore, combineReducers} from 'redux';

import CategoryReducer from './reducers/category.reducer';
import ProductReducer from './reducers/products.reducer';

// names of the global states
const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer
});

export default createStore(RootReducer);