import firebase from 'firebase/app';
import 'firebase/firestore';
import'firebase/auth';

const config = {
  apiKey: "AIzaSyBEFlkZ-xNcOTJbtTW7T54jDqIZS5wbtDY",
  authDomain: "frsh-clothing-db.firebaseapp.com",
  databaseURL: "https://frsh-clothing-db.firebaseio.com",
  projectId: "frsh-clothing-db",
  storageBucket: "frsh-clothing-db.appspot.com",
  messagingSenderId: "541070298117",
  appId: "1:541070298117:web:d1f10ccf93529e7df4606c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
