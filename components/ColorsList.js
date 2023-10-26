import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

export default function ColorsList({color, setColor, stock, colors}) {
  return (
    <>
      <View style={styles.rootContainer}>
        {colors.map(curColor => {
          return (
            <TouchableWithoutFeedback
              key={curColor}
              onPress={() => {
                setColor(curColor);
              }}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  height: 30,
                  width: 30,
                  marginRight: 10,
                  borderRadius: 50,
                  opacity: stock > 0 ? 1 : 0.5,
                  backgroundColor: `${curColor}`,
                  borderWidth: color === curColor ? 2 : 0,
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
