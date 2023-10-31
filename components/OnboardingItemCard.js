// import React from 'react';
// // eslint-disable-next-line no-unused-vars
// import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
// import Animated, {
//   useAnimatedStyle,
//   interpolate,
//   Extrapolate,
// } from 'react-native-reanimated';

// const {height, width} = Dimensions.get('window');

// export default function OnboardingItemCard({item, index, x}) {
//   const imageAnimationStyle = useAnimatedStyle(() => {
//     const opacityAnimation = interpolate(
//       x.value,
//       [(index - 1) * width, index * width, (index + 1) * width],
//       [1, 1, 1],
//       Extrapolate.CLAMP,
//     );

//     const translateYAnimation = interpolate(
//       x.value,
//       [(index - 1) * width, index * width, (index + 1) * width],
//       [100, 0, 100],
//     );

//     return {
//       opacity: opacityAnimation,
//       height: width * 0.8,
//       width: width * 0.8,
//       borderRadius: (width * 0.8) / 2,
//       transform: [{translateY: translateYAnimation}],
//     };
//   }, []);

//   const AnimatedImage = Animated.createAnimatedComponent(Image);

//   return (
//     <View style={styles.rootContainer}>
//       <AnimatedImage style={imageAnimationStyle} source={item.image} />

//       <View>
//         <Text style={styles.titleStyle}>{item.title}</Text>
//         <Text style={styles.descriptionStyle}>{item.description}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     width: width,
//   },
//   itemContainer: {},
//   titleStyle: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 10,
//   },
//   descriptionStyle: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: 'black',
//     marginHorizontal: 35,
//     lineHeight: 20,
//   },
// });
