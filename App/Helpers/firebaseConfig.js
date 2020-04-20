import firebase from 'react-native-firebase';

// Initialize Firebase
const config = {
  apiKey: "******************************",
  authDomain:  "******************************",
  databaseURL:  "******************************",
  projectId:  "******************************",
  storageBucket:  "******************************",
  messagingSenderId:  "******************************",
  appId: "******************************",
  measurementId:  "******************************"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp