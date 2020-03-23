require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.calc.calculator.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");

import React from 'react';
import { View, Text} from 'react-native';

import { CalcButton } from '../components';


const CalculatorScreen = props => {

  var oc = global.swisscalc.lib.operatorCache;
  var calc = new global.swisscalc.calc.calculator();
    
  // Calculate: 12 + 45 = 	
  calc.addDigit("1");
  calc.addDigit("2");
  calc.addBinaryOperator(oc.AdditionOperator);
  calc.addDigit("4");
  calc.addDigit("5");
  calc.equalsPressed();
  console.log(calc.getMainDisplay());	// 57
  calc.clear();

  return (
    <View style={{paddingTop: 50}}>
      <CalcButton title='+' color='red' backgroundColor='yellow' />
    </View>
  );
};

export default CalculatorScreen;