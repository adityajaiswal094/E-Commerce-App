import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

export default function ColorsList({colors}) {
  return (
    <>
      <View style={styles.rootContainer}>
        {colors.map(color => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                console.log(`${color} pressed!!`);
              }}>
              <View
                key={color}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  height: 30,
                  width: 30,
                  marginRight: 10,
                  borderRadius: 50,
                  backgroundColor: `${color}`,
                }}
              />
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    // justifyContent: 'flex-start',
    height: 30,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 14,
    // backgroundColor: 'blue',
  },
});
