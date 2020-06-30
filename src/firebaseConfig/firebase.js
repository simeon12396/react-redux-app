import firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: `${process.env.REACT_APP_API_KEY}`,
//     authDomain: `${process.env.REACT_APP_DB_AUTH_DOMAIN}`,
//     databaseURL: `${process.env.REACT_APP_DB_URL}`,
//     projectId: `${process.env.REACT_APP_PROJECT_ID}`,
//     storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
//     messagingSenderId: `${process.env.REACT_APP_SENDER_ID}`,
//     appId: `${process.env.REACT_APP_ID}`,
//     measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
// };

var firebaseConfig = {
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