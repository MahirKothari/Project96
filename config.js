import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCm6Il_HWKPBYxeawX_iJTcB7fHZvYe2KA",
    authDomain: "recipeee-6e0e9.firebaseapp.com",
    projectId: "recipeee-6e0e9",
    storageBucket: "recipeee-6e0e9.appspot.com",
    messagingSenderId: "625293078662",
    appId: "1:625293078662:web:d52f5e603dc1024d7ce107"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()