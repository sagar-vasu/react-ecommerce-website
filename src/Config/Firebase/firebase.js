import firebase from 'firebase'
import 'firebase/app'
import 'firebase/database'
import 'firebase/firebase-firestore'
import 'firebase/storage'


var firebaseConfig = {
  apiKey: "AIzaSyDA9d0rjyB04Y1MfIM46p66x53Pc1YTl7c",
  authDomain: "react-ecommerce-site.firebaseapp.com",
  databaseURL: "https://react-ecommerce-site.firebaseio.com",
  projectId: "react-ecommerce-site",
  storageBucket: "react-ecommerce-site.appspot.com",
  messagingSenderId: "1017833816163",
  appId: "1:1017833816163:web:b9c980e81f2b0d1a4a7856"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.FacebookAuthProvider();
export {
  firebaseApp,
  provider
}
