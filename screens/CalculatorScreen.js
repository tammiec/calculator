require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.calc.calculator.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { CalcButton, CalcDisplay } from '../components';


const CalculatorScreen = props => {

  const oc = global.swisscalc.lib.operatorCache;

  // STATE
  const [display, setDisplay] = useState('0');
  const [calc, setCalc] = useState(null);

  // INITIALIZE CALCULATOR
  useEffect(() => {
    setCalc(new global.swisscalc.calc.calculator());
  
  }, []);

  // ONPRESS FUNCTIONS
  const onDigitPress = digit => {
    calc.addDigit(digit);
    setDisplay(calc.getMainDisplay());
  };

  const onClearPress = () => {
    calc.clear();
    setDisplay(calc.getMainDisplay());
  };

  const onPlusMinusPress = () => {
    calc.negate();
    setDisplay(calc.getMainDisplay());
  };

  const onBinaryOperatorPress = operator => {
    calc.addBinaryOperator(operator);
    setDisplay(calc.getMainDisplay());
  };

  const onUnaryOperatorPress = operator => {
    calc.addUnaryOperator(operator);
    setDisplay(calc.getMainDisplay());
  }

  const onEqualsPress = () => {
    calc.equalsPressed();
    setDisplay(calc.getMainDisplay());
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <CalcDisplay display={display} />
      </View>

      <View style={styles.buttonContainer}>

        <View style={styles.buttonRow}>
          <CalcButton onPress={onClearPress} title='C' color='red' backgroundColor='yellow' />
          <CalcButton onPress={onPlusMinusPress} title='+/-' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onUnaryOperatorPress(oc.PercentOperator)} title='%' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onBinaryOperatorPress(oc.DivisionOperator)} title='/' color='red' backgroundColor='yellow' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton onPress={() => onDigitPress('7')} title='7' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onDigitPress('8')} title='8' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onDigitPress('9')} title='9' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onBinaryOperatorPress(oc.MultiplicationOperator)} title='x' color='red' backgroundColor='yellow' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton onPress={() => onDigitPress('4')} title='4' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onDigitPress('5')} title='5' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onDigitPress('6')} title='6' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onBinaryOperatorPress(oc.SubtractionOperator)} title='-' color='red' backgroundColor='yellow' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton onPress={() => onDigitPress('1')} title='1' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onDigitPress('2')} title='2' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onDigitPress('3')} title='3' color='red' backgroundColor='yellow' />
          <CalcButton onPress={() => onBinaryOperatorPress(oc.AdditionOperator)} title='+' color='red' backgroundColor='yellow' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton onPress={() => onDigitPress('0')} title='0' color='red' backgroundColor='yellow' style={{ flex: 2 }}/>
          <CalcButton onPress={() => onDigitPress('.')} title='.' color='red' backgroundColor='yellow' />
          <CalcButton onPress={onEqualsPress} title='=' color='red' backgroundColor='yellow' />
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
  buttonContainer: {
    paddingBottom: 20
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  }
})