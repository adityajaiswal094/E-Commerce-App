// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {Dialog, Portal, Button} from 'react-native-paper';

// export default function DialogBox({
//   showDialog,
//   title,
//   message,
//   //   cancelButton,
//   //   doneButton,
// }) {
//   return (
//     <View style={styles.container}>
//       <Portal>
//         <Dialog visible={showDialog} onDismiss={() => {}}>
//           {/* <Dialog.Icon icon="warning" /> */}
//           <Dialog.Title style={styles.title}>{title}</Dialog.Title>
//           <Dialog.Content>
//             <Text>{message}</Text>
//           </Dialog.Content>
//           <Dialog.Actions>
//             <Button
//               onPress={() => {
//                 return;
//               }}>
//               Cancel
//             </Button>
//             <Button
//               onPress={() => {
//                 return;
//               }}>
//               Done
//             </Button>
//           </Dialog.Actions>
//         </Dialog>
//       </Portal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {textAlign: 'center'},
//   textStyle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'black',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
