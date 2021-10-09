
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyAWya4_EXBnfEzBrLJ1ehgpSZUEW54u68c",
  
    authDomain: "vuejs3-firebase-ef887.firebaseapp.com",
  
    projectId: "vuejs3-firebase-ef887",
  
    storageBucket: "vuejs3-firebase-ef887.appspot.com",
  
    messagingSenderId: "440356703624",
  
    appId: "1:440356703624:web:4e7fe35661750374927e3d"
  
  };

  // init firebase :
  firebase.initializeApp( firebaseConfig )

  // init firestore
  const db = firebase.firestore();

  export{
      db
  }