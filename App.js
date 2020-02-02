import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Total from './components/Total';
import ButtonContainer from './components/ButtonContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Total 
        total={0}
      />
      <ButtonContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    paddingBottom: '15%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
