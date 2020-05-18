import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2CddVbCac-vnevGemQ9z6W5sZwGx5qVI",
    authDomain: "pauls-store-9abd7.firebaseapp.com",
    databaseURL: "https://pauls-store-9abd7.firebaseio.com",
    projectId: "pauls-store-9abd7",
    storageBucket: "pauls-store-9abd7.appspot.com",
    messagingSenderId: "231134766571",
    appId: "1:231134766571:web:621495a1cb3c81cbe125ae",
    measurementId: "G-S0B1K6DBMJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;