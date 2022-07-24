import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC1wvowylScjSPIKU6HdlFcAYNND2u_GBs',
  authDomain: 'reading-list-53db7.firebaseapp.com',
  projectId: 'reading-list-53db7',
  storageBucket: 'reading-list-53db7.appspot.com',
  messagingSenderId: '1096789919633',
  appId: '1:1096789919633:web:4e641f212f02a4de11bc30',
};

//init app
initializeApp(firebaseConfig);

//init database 
const db = getFirestore();

//init auth
const auth = getAuth();

//exports
export { db, auth };
