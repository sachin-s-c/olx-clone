import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlK48iGhO_jEA_T9AD0nRvsTNTMpyVSug",
    authDomain: "fir-2eea9.firebaseapp.com",
    projectId: "fir-2eea9",
    storageBucket: "fir-2eea9.appspot.com",
    messagingSenderId: "62057600067",
    appId: "1:62057600067:web:98eddbb5e0ec83318e70f6",
    measurementId: "G-2G7HZXKWEL"
  };


  firebase.initializeApp(firebaseConfig)

  export default firebase