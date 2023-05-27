import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyB4r_moA5YxRunOFXLqaIFJvRoMJRhL9mY",
    authDomain: "olx-demo-14efc.firebaseapp.com",
    projectId: "olx-demo-14efc",
    storageBucket: "olx-demo-14efc.appspot.com",
    messagingSenderId: "1067833547649",
    appId: "1:1067833547649:web:23815b50860f674659a680",
    measurementId: "G-2DYP59RSL9"
};

export default  firebase.initializeApp(firebaseConfig);