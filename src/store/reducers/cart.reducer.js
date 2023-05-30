import { ADD_ITEM, REMOVE_ITEM } from "../actions/cart.action";

const initialState = {
  items: [],
  total: 0
};

const sumTotal = (list) => (
  list.map(item => item.qty*item.price).reduce((a,b) => a+b,0)
);

const CartReducer = (state = initialState, action) => {
  console.log('action');
  console.log(action);
  
  switch (action.type) {
    case REMOVE_ITEM:
      const cleanCart = [...state.items].filter(
        item => item.id !== action.itemId
      );

      return  {...state, items: cleanCart, total: sumTotal(cleanCart)};
    case ADD_ITEM:
      const indexItem = state.items.findIndex(
        item => item.id === action.item.id
      );

      // verify item does not exist already
      if(indexItem === -1) {
        const item = {...action.item, qty: 1};
        const updateCart = [...state.items, item];
        console.log(updateCart);

        return {...state, items: updateCart, total: sumTotal(updateCart)};
      }
    default:
      return state;
      break;
  }
};

export default CartReducer;