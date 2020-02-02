import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Total(props) {
  return (
    <Text style={styles.total}>{props.total}</Text>
  );
}

const styles = StyleSheet.create({
  total: {
    backgroundColor: '#bbbbbb',
    width: '100%',
    height: '15%'
  },
});
