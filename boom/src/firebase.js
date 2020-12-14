import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDr1WV_UgZ9YzsydlyZb8bHD7rG08WHNGI",
    authDomain: "boom-boom-a39fa.firebaseapp.com",
    databaseURL: "https://boom-boom-a39fa.firebaseio.com",
    projectId: "boom-boom-a39fa",
    storageBucket: "boom-boom-a39fa.appspot.com",
    messagingSenderId: "1050384764150",
    appId: "1:1050384764150:web:2c3db94d5cd2d39463b0d7",
    measurementId: "G-L69BC3BK91"
  };
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);
  
  export default fireDB.database().ref();