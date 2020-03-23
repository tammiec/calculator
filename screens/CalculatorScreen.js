require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.calc.calculator.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");

import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { CalcButton, CalcDisplay } from '../components';


const CalculatorScreen = props => {

  // INITIALIZE CALCULATOR
  var oc = global.swisscalc.lib.operatorCache;
  var calc = new global.swisscalc.calc.calculator();
  
  // STATE
  const [display, setDisplay] = useState('0');

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <CalcDisplay display={display} />
      </View>

      <View>

        <View style={styles.buttonRow}>
          <CalcButton title='C' color='red' backgroundColor='yellow' />
          <CalcButton title='+/-' color='red' backgroundColor='yellow' />
          <CalcButton title='%' color='red' backgroundColor='yellow' />
          <CalcButton title='/' color='red' backgroundColor='yellow' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton title='7' color='red' backgroundColor='yellow' />
          <CalcButton title='8' color='red' backgroundColor='yellow' />
          <CalcButton title='9' color='red' backgroundColor='yellow' />
          <CalcButton title='x' color='red' backgroundColor='yellow' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton title='4' color='red' backgroundColor='yellow' />
          <CalcButton title='5' color='red' backgroundColor='yellow' />
          <CalcButton title='6' color='red' backgroundColor='yellow' />
          <CalcButton title='-' color='red' backgroundColor='yellow' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton title='1' color='red' backgroundColor='yellow' />
          <CalcButton title='2' color='red' backgroundColor='yellow' />
          <CalcButton title='3' color='red' backgroundColor='yellow' />
          <CalcButton title='+' color='red' backgroundColor='yellow' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton title='0' color='red' backgroundColor='yellow' style={{ flex: 2 }}/>
          <CalcButton title='.' color='red' backgroundColor='yellow' />
          <CalcButton title='=' color='red' backgroundColor='yellow' />
        </View>
      </View>

    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  }
})