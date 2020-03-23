import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CalcDisplay = ({ display = '', ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
    </View>
  );
};

export default CalcDisplay;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  display: {
    fontSize: 70,
    color: 'white',
    textAlign: 'right'
  }
});