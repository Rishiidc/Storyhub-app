import firebase from 'firebase'
require("@firebase/firestore")

// Initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyDftEF-QFV-VskHVNxhaxeXarmiGmCiwHQ",
    authDomain: "project-71-feb02.firebaseapp.com",
    projectId: "project-71-feb02",
    storageBucket: "project-71-feb02.appspot.com",
    messagingSenderId: "642303039184",
    appId: "1:642303039184:web:315c207d005f8d675ef0d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()