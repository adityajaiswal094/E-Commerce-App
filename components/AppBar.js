import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import CustomIconButton from './CustomIconButton';

const {height, width} = Dimensions.get('window');

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      {/* heading */}
      <View style={styles.approw}>
        <Text style={styles.heading}>My App</Text>

        {/* action buttons */}
        <View style={styles.actions}>
          <CustomIconButton name="search" size={22} />
          <View style={styles.horizontalSpacing} />
          <CustomIconButton name="shopping-cart" size={22} />
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
    paddingHorizontal: width * 0.05,
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
    fontSize: 24,
  },
  actions: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  horizontalSpacing: {
    width: 10,
  },
});
