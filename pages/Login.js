import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {signInReducer} from '../store/redux/signInReducers';
import {useDispatch} from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      console.log('usrInfo: ', usrInfo);
      // setUserInfo(usrInfo);

      // storing userInfo in reducer
      dispatch(signInReducer({userDetails: usrInfo}));

      // navigating to home screen
      // navigate('/home');
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  imageStyle: {height: 60, width: 60, marginBottom: 10},
});
