// import React from 'react';
// import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedScrollHandler,
// } from 'react-native-reanimated';

// import onboardingData from '../data/onboardingData';
// import OnboardingItemCard from '../components/OnboardingItemCard';

// export default function OnboardingScreen() {
//   const x = useSharedValue(0);
//   const onScroll = useAnimatedScrollHandler({
//     onScroll: event => {
//       x.value = event.contentOffset.x;
//       console.log(event.contentOffset.x);
//     },
//   });

//   const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

//   return (
//     <SafeAreaView style={styles.rootContainer}>
//       <AnimatedFlatList
//         onScroll={onScroll}
//         data={onboardingData}
//         renderItem={({item, index}) => {
//           return (
//             <OnboardingItemCard key={index} item={item} index={index} x={x} />
//           );
//         }}
//         keyExtractor={item => item.id}
//         scrollEventThrottle={16}
//         horizontal={true}
//         bounces={false}
//         pagingEnabled={true}
//         showsHorizontalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     backgroundColor: '#1ecbe1',
//   },
// });
