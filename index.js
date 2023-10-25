/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import {NativeRouter} from 'react-router-native';

export default function Main() {
  return (
    <NativeRouter>
      <PaperProvider>
        <App />
      </PaperProvider>
    </NativeRouter>
  );
}

AppRegistry.registerComponent(appName, () => Main);
