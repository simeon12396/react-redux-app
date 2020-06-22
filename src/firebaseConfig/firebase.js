import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOkeFPn5vfZFc5TH_ZB6k5RKBNngoCCOE",
    authDomain: "react-redux-http.firebaseapp.com",
    databaseURL: "https://react-redux-http.firebaseio.com",
    projectId: "react-redux-http",
    storageBucket: "react-redux-http.appspot.com",
    messagingSenderId: "47844379238",
    appId: "1:47844379238:web:0b6e331527a64da880bba7",
    measurementId: "G-S578B2XFPJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;