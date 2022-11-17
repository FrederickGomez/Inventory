import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyDZUGtSPqswATVM_-fq91gWRMEfvotD6Ms",
    authDomain: "inventory-840f2.firebaseapp.com",
    projectId: "inventory-840f2",
    storageBucket: "inventory-840f2.appspot.com",
    messagingSenderId: "909638041153",
    appId: "1:909638041153:web:a9edc1b86b652a07f890c0",
    measurementId: "G-CGYRNCQ9Y8"
  };
  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();