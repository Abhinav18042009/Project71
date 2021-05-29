import firebase from 'firebase';
require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBoBJh2RVVOhHuSvTvY2VRlxRLQoDssY0s",
    authDomain: "newsletter-b15c2.firebaseapp.com",
    databaseURL: "https://newsletter-b15c2-default-rtdb.firebaseio.com",
    projectId: "newsletter-b15c2",
    storageBucket: "newsletter-b15c2.appspot.com",
    messagingSenderId: "901015823645",
    appId: "1:901015823645:web:5aaf42a5cff69a822dedf4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default  firebase.firestore();