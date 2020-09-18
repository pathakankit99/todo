// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCI7k-tjEMYAJKA6lqymmr9ZXFFsvNqCKY",
    authDomain: "ak99todo.firebaseapp.com",
    databaseURL: "https://ak99todo.firebaseio.com",
    projectId: "ak99todo",
    storageBucket: "ak99todo.appspot.com",
    messagingSenderId: "1048149996113",
    appId: "1:1048149996113:web:aeb4fb70a8434f8dfdfe70",
    measurementId: "G-1TM7QMB4GE"
  });

  const db = firebaseApp.firestore()

  export default db
