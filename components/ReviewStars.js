import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

export default function ReviewStars({stars, reviews, size, location}) {
  const rating = Array.from({length: 5}, (ele, index) => {
    let number = index + 0.5;

    return (
      <View key={index}>
        {stars >= index + 1 ? (
          <Icon name="star" size={size} color="#bff906" />
        ) : stars >= number ? (
          <Icon name="star-half-empty" size={size} color="#bff906" />
        ) : (
          <Icon name="star-o" size={size} color="#bff906" />
        )}
      </View>
    );
  });

  return (
    <View style={styles.rootContainer}>
      {rating}
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          color: 'black',
          marginLeft: width * 0.02,
          fontSize: size,
        }}>
        {location.pathname === '/' ? `${reviews}` : `${reviews} reviews`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginBottom: 8,
  },
  textStyle: {
    color: 'black',
    marginLeft: width * 0.02,
    fontSize: height < 762 ? height * 0.02 : height * 0.04,
  },
});
