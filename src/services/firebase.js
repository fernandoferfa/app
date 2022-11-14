// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCg8Blti9QINcVUGvBpi-HBHjFTbqz5sdI',
  authDomain: 'log-fabi.firebaseapp.com',
  projectId: 'log-fabi',
  storageBucket: 'log-fabi.appspot.com',
  messagingSenderId: '662905534531',
  appId: '1:662905534531:web:371712fb705365ffa37cf6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
