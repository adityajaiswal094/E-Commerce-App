/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {saveTokenDetails, signInReducer} from '../store/redux/signInReducers';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-native';

const {height, width} = Dimensions.get('window');

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      // console.log('usrInfo: ', usrInfo);

      // storing userInfo in reducer
      dispatch(signInReducer({userDetails: usrInfo}));

      // navigating to home screen
      navigate('/');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.error(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.error(error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.error(error);
        // play services not available or outdated
      } else {
        // some other error happened
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>Welcome to</Text>
        <Image
          style={styles.logoStyle}
          source={require('../assets/images/shoppe_logo.png')}
        />
      </View>

      <GoogleSigninButton
        style={styles.googleButtonStyle}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    height: height * 0.2,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    height: 80,
    // width: 100,
    // backgroundColor: 'orange',
    objectFit: 'contain',
  },
  textStyle: {
    fontSize: 25,
    color: '#1ecbe1',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageStyle: {height: 60, width: 60, marginBottom: 10},
});
