import firebase from "firebase";

//Initialize app

var config = {
  apiKey: "AIzaSyDwv3OlTDiVEeOw9ION0Kl82p3SvJkfBP8",
  authDomain: "walletapp-d672e.firebaseapp.com",
  databaseURL: "https://walletapp-d672e.firebaseio.com",
  projectId: "walletapp-d672e",
  storageBucket: "",
  messagingSenderId: "665378029003",
  appId: "1:665378029003:web:b1a79a53710b0959"
};

firebase.initializeApp(config);

export default firebase;
