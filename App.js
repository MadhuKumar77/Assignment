import React, { Component } from 'react';
import { AuthContainer } from './App/Navigations/Navigation'
import { Root } from "native-base";
import firebase from 'react-native-firebase';
import { firebaseApp } from './App/Helpers/firebaseConfig'
import Geolocation from '@react-native-community/geolocation';

class App extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseApp);
    }
  }



  render() {
    return (
      <Root>
        <AuthContainer />
      </Root>
    )
  }

}


export default App;
