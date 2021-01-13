import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAro5iZ9SEe3Ba5oq9_NaOUAwGyv_jQn6Y",
    authDomain: "crwn-db-73a20.firebaseapp.com",
    projectId: "crwn-db-73a20",
    storageBucket: "crwn-db-73a20.appspot.com",
    messagingSenderId: "431111045500",
    appId: "1:431111045500:web:5859b4e2a9bc36f2a0e4f9",
    measurementId: "G-W6945KRDGZ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;