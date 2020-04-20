import  'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './App/Reducer/reducer'
import {name as appName} from './app.json';


const Root = () => (
  <Provider store={Store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
