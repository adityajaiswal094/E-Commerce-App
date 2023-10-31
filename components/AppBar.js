import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  /* Text, */ Image,
  Dimensions,
  Pressable,
} from 'react-native';
import CustomIconButton from './CustomIconButton';
import {useNavigate, useLocation} from 'react-router-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Badge} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {totalCartItemValue} from '../store/redux/cartReducers';
import Icon from 'react-native-vector-icons/AntDesign';
import {signOutReducer} from '../store/redux/signInReducers';
// import {useCartContext} from '../contexts/cartContext';

const {height, width} = Dimensions.get('window');

export default function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // const {totalItem} = useCartContext();
  const {cart, totalItem} = useSelector(state => state.cartDetails);
  const dispatch = useDispatch();

  // const removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem('cartData').then(() => {
  //       console.log('Done.');
  //     });
  //   } catch (e) {
  //     // remove error
  //     console.error('Error:', e);
  //   }
  // };

  useEffect(() => {
    dispatch(totalCartItemValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <View style={styles.appbar}>
      {/* heading */}
      <View style={styles.approw}>
        <Image
          style={styles.appLogo}
          source={require('../assets/images/shoppe_logo_white.png')}
        />
        {/* <Text style={styles.heading}>My App</Text> */}

        {/* action buttons */}
        <View style={styles.actions}>
          <CustomIconButton
            name="search"
            size={height < 762 ? height * 0.035 : height * 0.04}
            color={'white'}
            onPress={() => {}}
          />
          <View style={styles.horizontalSpacing} />
          {/* <View style={styles.cartContainer}> */}
          <CustomIconButton
            name="shopping-cart"
            size={height < 762 ? height * 0.035 : height * 0.04}
            color={'white'}
            onPress={() =>
              location.pathname === '/cart' ? null : navigate('/cart')
            }
          />
          <Badge
            visible={totalItem === 0 ? false : true}
            size={16}
            style={styles.badgeStyle}>
            {totalItem}
          </Badge>
          {/* </View> */}

          {/*  */}
          <View style={styles.horizontalSpacing} />
          <Pressable
            onPress={() => {
              dispatch(signOutReducer());
            }}>
            <Icon
              name="logout"
              size={height < 762 ? height * 0.035 : height * 0.04}
              color={'white'}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    // flex: 1,
    height: height * 0.08,
    width: width * 1,
    backgroundColor: '#1ecbe1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: width * 0.02,
    paddingLeft: width * 0.06,
  },
  approw: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appLogo: {
    height: 50,
    width: 80,
    objectFit: 'contain',
  },
  heading: {
    flex: 1,
    color: 'white',
    fontSize: height < 762 ? height * 0.03 : height * 0.04,
  },
  actions: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: width * 0.03,
  },
  horizontalSpacing: {
    width: width * 0.04,
  },
  cartContainer: {
    // flex: 1,
    height: '100%',
    width: width * 0.1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    // color: 'white',
    backgroundColor: '#5718b6',
  },
});
