import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Dimensions, Pressable} from 'react-native';
import CustomIconButton from './CustomIconButton';
import {useNavigate, useLocation} from 'react-router-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Badge} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {totalCartItemValue} from '../store/redux/cartReducers';
import Icon from 'react-native-vector-icons/AntDesign';
import {signOutReducer} from '../store/redux/signInReducers';

const {height, width} = Dimensions.get('window');

export default function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // const {totalItem} = useCartContext();
  const {cart, totalItem} = useSelector(state => state.cartDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalCartItemValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <>
      <View style={styles.appbar}>
        {/* heading */}
        <View style={styles.approw}>
          <Image
            style={styles.appLogo}
            source={require('../assets/images/shoppe_logo_white.png')}
          />

          {/* action buttons */}
          <View style={styles.actions}>
            <CustomIconButton
              name="search"
              size={height < 762 ? height * 0.03 : height * 0.035}
              color={'white'}
              onPress={() => {
                navigate('/search');
              }}
            />
            <View style={styles.horizontalSpacing} />
            {/* <View style={styles.cartContainer}> */}
            <Pressable
              onPress={() =>
                location.pathname === '/cart' ? null : navigate('/cart')
              }>
              <CustomIconButton
                name="shopping-cart"
                size={height < 762 ? height * 0.03 : height * 0.03}
                color={'white'}
              />
              <Badge
                visible={totalItem === 0 ? false : true}
                size={height < 762 ? 13 : 16}
                style={styles.badgeStyle}>
                {totalItem}
              </Badge>
            </Pressable>
            {/* </View> */}

            {/*  */}
            <View style={styles.horizontalSpacing} />
            <Pressable
              onPress={() => {
                dispatch(signOutReducer());
                navigate('/');
              }}>
              <Icon
                name="logout"
                size={height < 762 ? height * 0.03 : height * 0.03}
                color={'white'}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </>
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
    gap: 1,
  },
  appLogo: {
    flex: 1,
    height: height < 762 ? 60 : 50,
    // width: width < 361 ? 80 : 100,
    alignItems: 'flex-start',
    objectFit: 'contain',
    // backgroundColor: 'orange',
  },
  actions: {
    flex: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: width < 361 ? 0 : width * 0.01,
    // backgroundColor: 'orange',
  },
  horizontalSpacing: {
    width: width < 361 ? width * 0.04 : width * 0.03,
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
    color: 'white',
    backgroundColor: '#5718b6',
  },
});
