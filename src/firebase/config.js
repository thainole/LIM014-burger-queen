import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRBQbefGnYCLI2LfPBaywbSp5HTIgkd6A",
  authDomain: "lim014-burgerqueen.firebaseapp.com",
  projectId: "lim014-burgerqueen",
  storageBucket: "lim014-burgerqueen.appspot.com",
  messagingSenderId: "131611591091",
  appId: "1:131611591091:web:247ea9895e9a117af3cbc6"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
