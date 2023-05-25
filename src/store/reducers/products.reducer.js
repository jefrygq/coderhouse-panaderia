import { PRODUCTS } from "../../data/products";
import { FILTERED_PRODUCTS, SELECTED_PRODUCT } from "../actions/products.action";

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const ProductReducer = (state = initialState, action) => {
  console.log('action');
  console.log(action);

  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        selected: state.products.find(
          product => product.id === action.productId
        ),
      };
      break;
    case FILTERED_PRODUCTS:
      // console.log('filtering products');
      return {
        ...state,
        filteredProducts: state.products.filter(
          product => product.categoryId === action.categoryId
        )
      };
      break;
  
    default:
      return state;
      break;
  }
}

export default ProductReducer;