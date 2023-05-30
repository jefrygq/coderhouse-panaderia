import { URL_API } from "../../constants/database";

export const GET_ORDERS = 'GET_ORDERS';

export const getOrders = () => {
  return async dispatch => {
    try {
      const response = await fetch (`${URL_API}/orders.json`,
      {
        method: 'GET',
        headers: {
          'Content-TYPE': 'application/json'
        }
      });
      
      const result = await response.json();
      console.log(response);

      const orders = Object.keys(result).map(key => ({
        ...result[key],
        id: key
      }));
      console.log(orders);

      dispatch({ type: GET_ORDERS, payload: orders });
    } catch (error) {
      console.log(error);
    }
  }
}