import { URL_AUTH_SIGNUP } from "../../constants/database";

export const SIGN_UP = 'SIGN_UP';

export const signUp = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch (URL_AUTH_SIGNUP,
      {
        method: 'POST',
        headers: {
          'Content-TYPE': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      });
      
      const result = await response.json();
      // console.log(response);

      dispatch({
        type: SIGN_UP,
        token: result.idToken,
        userId: result.localId
      });
    } catch (error) {
      console.log(error);
    }
  }
}