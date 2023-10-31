import React, {useEffect} from 'react';
import {StatusBar /* , useColorScheme */} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Routes, Route} from 'react-router-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import HomePage from './pages/HomePage';
import Orders from './pages/Orders';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Test from './pages/Test';
import PageNotFound from './pages/PageNotFound';
import Auth from './pages/Auth';
import Login from './pages/Login';
import {WEB_CLIENT_ID} from '@env';
// import OnboardingScreen from './pages/OnboardingScreen';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: `${WEB_CLIENT_ID}`,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  return (
    <>
      <StatusBar /* barStyle={backgroundStyle} */ backgroundColor="#1ecbe1" />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* <OnboardingScreen /> */}
    </>
  );
}

export default App;
