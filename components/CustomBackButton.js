import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

export default function CustomBackButton({navigate}) {
  return (
    <FAB
      icon="arrow-left"
      style={styles.fab}
      onPress={() => {
        navigate(-1);
      }}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 12,
  },
});
