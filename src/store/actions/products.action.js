export const SELECTED_PRODUCT = 'SELECTED_PRODUCTS';
export const FILTERED_PRODUCTS = 'FILTERED_PRODUCTS';

export const selectedProduct = id => (
  {
    type: SELECTED_PRODUCT,
    productId: id
  }
);

export const filteredProducts = categoryId => (
  {
    type: FILTERED_PRODUCTS,
    categoryId: categoryId
  }
);