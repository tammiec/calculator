import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default function ButtonContainer() {

  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '&#x2b;', '&#x2212;', '&#xd7;', '&#xf7;', '&#x3d;', 'C'];

  return (
    <View style={styles.container}>
      {buttons.map(el => (<Button key={} title={el} />))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
