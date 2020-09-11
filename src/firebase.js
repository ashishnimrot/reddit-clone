import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCR7bB6clhteeJk-ubct936T5noiFZv-B4',
  authDomain: 'reddit-clone-340b9.firebaseapp.com',
  databaseURL: 'https://reddit-clone-340b9.firebaseio.com',
  projectId: 'reddit-clone-340b9',
  storageBucket: 'reddit-clone-340b9.appspot.com',
  messagingSenderId: '12276558459',
  appId: '1:12276558459:web:b3435afa59b1b8cdc7d0de',
  measurementId: 'G-P82CEBFQHH',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
