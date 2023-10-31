import React from 'react';
import {StatusBar /* , useColorScheme */} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Routes, Route} from 'react-router-native';

import HomePage from './pages/HomePage';
import AppBar from './components/AppBar';
import Orders from './pages/Orders';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Test from './pages/Test';
import PageNotFound from './pages/PageNotFound';
import Auth from './pages/Auth';
import OnboardingScreen from './pages/OnboardingScreen';

// import {ProductProvider} from './contexts/productContext';
// import {CartProvider} from './contexts/cartContext';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <StatusBar /* barStyle={backgroundStyle} */ backgroundColor="#1ecbe1" />
      <AppBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* <OnboardingScreen /> */}
    </>
  );
}

export default App;
