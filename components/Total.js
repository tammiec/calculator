import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Total(props) {
  return (
    <View style={styles.container}>
      <Text>{props.total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbbbbb',
    width: '100%',
    height: '15%'
  },
});
