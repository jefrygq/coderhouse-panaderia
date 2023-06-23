import { useCallback, useEffect, useReducer, useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, KeyboardAvoidingView} from 'react-native';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/auth.action';
import Input from '../components/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    }
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    }

    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    }
  }
  return state;
}

const AuthScreen = ({route, navigation}) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if(formState.formIsValid){
      dispatch(signUp(formState.inputValues.email, formState.inputValues.password));
    } else {
      Alert.alert('Invalid Input', 'Please check the errors in the form', [{text: 'Ok'}]);
    }
  }

  useEffect(() => {
    if(error) {
      Alert.alert('An Error Occurred', error, [{text: 'Ok'}]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    console.log('executing onInputChangeHandler');
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier
    })
  }, [dispatchFormState]);

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior='padding' keyboardVerticalOffset={50}>
      <View style={styles.container}>
        <Text style={styles.title}>BakeryApp</Text>
        <Text style={styles.title}>Create Account</Text>
        <View>
          <Input
            id='email'
            label='Email'
            type='email-address'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType='next'
            required
            email
            errorText={'Please enter a valid email address'}
            onInputChange={onInputChangeHandler}
            initialValue={""}
            style={styles.input}
            placeholder='Email' 
          />
          <Input
            id='password'
            label='Password'
            type='password'
            keyboardType='default'
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType='next'
            required
            minLength={5}
            errorText={'Please enter a valid password (min 5 letters'}
            onInputChange={onInputChangeHandler}
            initialValue={""}
            secureTextEntry
            style={styles.input} 
            placeholder='Password' 
          />
        </View>
        <View style={styles.footer}>
          <View><Button title='Register' onPress={handleSignUp} /></View>
          <View><Button title='Login' /></View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  container: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: 'white',
    height: '50%',
    padding: 12
  },
  footer: {
    marginTop: 42
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default AuthScreen;
