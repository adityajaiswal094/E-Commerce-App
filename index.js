/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import {NativeRouter, Routes, Route} from 'react-router-native';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store/redux/store';

export default function Main() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeRouter>
          <PaperProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </PaperProvider>
        </NativeRouter>
      </PersistGate>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
