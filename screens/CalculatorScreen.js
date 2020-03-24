require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.calc.calculator.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");

import React, { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, Dimensions, PanResponder } from 'react-native';
import { CalcButton, CalcDisplay } from '../components';

const CalculatorScreen = props => {

  const oc = global.swisscalc.lib.operatorCache;

  // STATE
  const [display, setDisplay] = useState('0');
  const [calc, setCalc] = useState(null);

  // MEMOIZE PANRESPONDER
  const panResponder = useMemo(() => PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (Math.abs(gestureState.dx) >= 50) {
          onBackSpacePress();
        }
      },
  }));

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

  const onBackSpacePress = () => {
    calc.backspace();
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
      <View style={styles.displayContainer} { ...panResponder.panHandlers } >
        <CalcDisplay display={display} />
      </View>

      <View style={styles.buttonContainer}>

        <View style={styles.buttonRow}>
          <CalcButton onPress={onClearPress} title='C' color='#373740' backgroundColor='#F2E2DF' />
          <CalcButton onPress={onPlusMinusPress} title='+/-' color='#373740' backgroundColor='#F2E2DF' />
          <CalcButton onPress={() => onUnaryOperatorPress(oc.PercentOperator)} title='%' color='#373740' backgroundColor='#F2E2DF' />
          <CalcButton onPress={() => onBinaryOperatorPress(oc.DivisionOperator)} title='/' color='white' backgroundColor='#F2ACAC' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton onPress={() => onDigitPress('7')} title='7' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={() => onDigitPress('8')} title='8' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={() => onDigitPress('9')} title='9' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={() => onBinaryOperatorPress(oc.MultiplicationOperator)} title='x' color='white' backgroundColor='#F2ACAC' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton onPress={() => onDigitPress('4')} title='4' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={() => onDigitPress('5')} title='5' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={() => onDigitPress('6')} title='6' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={() => onBinaryOperatorPress(oc.SubtractionOperator)} title='-' color='white' backgroundColor='#F2ACAC' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton onPress={() => onDigitPress('1')} title='1' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={() => onDigitPress('2')} title='2' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={() => onDigitPress('3')} title='3' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={() => onBinaryOperatorPress(oc.AdditionOperator)} title='+' color='white' backgroundColor='#F2ACAC' />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton onPress={() => onDigitPress('0')} title='0' color='white' backgroundColor='#9CC4CA' style={{ flex: 2 }}/>
          <CalcButton onPress={() => onDigitPress('.')} title='.' color='white' backgroundColor='#9CC4CA' />
          <CalcButton onPress={onEqualsPress} title='=' color='white' backgroundColor='#F2ACAC' />
        </View>
      </View>

    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373740',
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