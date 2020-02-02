import React, { useRef } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import generateKey from '@tammiec/generatekey';

export default function ButtonContainer() {

  const numberButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const utilButtons = ['+', '-', '×', '÷', '=', 'C'];

  
  return (
    <View style={styles.buttonContainer}>
      {numberButtons.map(el => {
        const buttonRef = useRef();
        const handleNumber = () => {
          console.log('number is', parseInt(buttonRef.current.props.title));
        };
        return <Button 
          key={generateKey()} 
          title={el} 
          style={styles.button} 
          ref={buttonRef} 
          onPress={handleNumber}
        />
      })}
      {utilButtons.map(el => <Button key={generateKey()} title={el} style={styles.button}/>)}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    flex: 1,
    width: '100px'
  }
});
