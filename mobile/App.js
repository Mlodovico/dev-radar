import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Debugger and divece time',
  'Possible Unhandled Pormise Rejection',
])

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
    <Routes />
    
    </>
  );
}

