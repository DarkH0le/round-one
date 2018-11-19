
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAkx5GC3ecgt-cxCsCfrFxew5KJjIlR7AM",
    authDomain: "roundone-223000.firebaseapp.com",
    databaseURL: "https://roundone-223000.firebaseio.com",
    projectId: "roundone-223000",
    storageBucket: "roundone-223000.appspot.com",
    messagingSenderId: "947576426653"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export default firebase;