import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CalcButton = ({
  title = '',
  color = 'white',
  backgroundColor = 'black',
  style = {},
  onPress,
  ...props
}) => {

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: backgroundColor, }, { ...style }]}>
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 240,
    margin: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});