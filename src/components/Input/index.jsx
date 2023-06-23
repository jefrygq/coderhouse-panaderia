import { useEffect, useReducer } from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './styles';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.key) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      }
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      }
    default:
      return state;
  }
};

const Input = ({
  id,
  initialValue, 
  isValid, 
  onInputChange,
  required, 
  email, 
  max, 
  min,
  label,
  onBlurHandler,
  errorText,
  ...rest
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue ? initialValue : '',
    isValid: isValid ? isValid : false,
    touched: false
  });

  useEffect(() => {
    console.log('inputState', inputState);
    onInputChange(id, inputState.value, inputState.isValid);
  }, [inputState, onInputChange, id]);

  textChangeHandler = (text) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if(required && text.trim().length === 0) isValid = false;
    if(email && !emailRegex.test(text.toLoverCase())) isValid = false;
    if(max && text.length > max) isValid=false;
    if(min != null && text.length < min) isValid=false;

    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid: isValid
    });
  };

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={onBlurHandler}
        {...rest}
      />
      {!inputState.isValid && inputState.touched && (<View><Text>{errorText}</Text></View>)}
    </View>
  );
}

export default Input;
