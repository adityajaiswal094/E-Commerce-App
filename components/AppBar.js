import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import CustomIconButton from './CustomIconButton';
import {useNavigate, useLocation} from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window');

export default function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('cartData').then(() => {
        console.log('Done.');
      });
    } catch (e) {
      // remove error
      console.error('Error:', e);
    }
  };

  return (
    <View style={styles.appbar}>
      {/* heading */}
      <View style={styles.approw}>
        <Text style={styles.heading}>My App</Text>

        {/* action buttons */}
        <View style={styles.actions}>
          <CustomIconButton
            name="search"
            size={height < 762 ? height * 0.03 : height * 0.04}
            color={'white'}
            onPress={() => {
              removeValue();
            }}
          />
          <View style={styles.horizontalSpacing} />
          <CustomIconButton
            name="shopping-cart"
            size={height < 762 ? height * 0.03 : height * 0.04}
            color={'white'}
            onPress={() =>
              location.pathname === '/cart' ? null : navigate('/cart')
            }
          />
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
    paddingHorizontal: width * 0.04,
  },
  approw: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
  horizontalSpacing: {
    width: width * 0.03,
  },
});
