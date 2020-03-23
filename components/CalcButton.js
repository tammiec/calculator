import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CalcButton = ({
  title = '',
  color = 'white',
  backgroundColor = 'black',
  ...props
}) => {

  const onPress = () => {

  };

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: backgroundColor }]}>
        <Text style={[styles.text, { color: color }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});