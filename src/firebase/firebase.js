import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDX8H251mECEgVFMyLjN**************",
    authDomain: "********.firebaseapp.com",
    databaseURL: "https://***********.firebaseio.com",
    projectId: "************",
    storageBucket: "*********.appspot.com",
    messagingSenderId: "365********"
  };

firebase.initializeApp(config);
 const database = firebase.database();

 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};




