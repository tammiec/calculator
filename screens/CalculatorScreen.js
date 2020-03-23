require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.calc.calculator.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");

import React, { useState } from 'react';
import { View, Text} from 'react-native';

import { CalcButton, CalcDisplay } from '../components';


const CalculatorScreen = props => {

  // INITIALIZE CALCULATOR
  var oc = global.swisscalc.lib.operatorCache;
  var calc = new global.swisscalc.calc.calculator();
  
  // STATE
  const [display, setDisplay] = useState('0');

  return (
    <View style={{paddingTop: 50}}>
      <CalcDisplay display={display} />
      <CalcButton title='+' color='red' backgroundColor='yellow' />
    </View>
  );
};

export default CalculatorScreen;