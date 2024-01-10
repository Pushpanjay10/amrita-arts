// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDz6s-RX--bVq53JHaxMC10VYmi9sXTA-U',
	authDomain: 'amrita-arts-1c623.firebaseapp.com',
	projectId: 'amrita-arts-1c623',
	storageBucket: 'amrita-arts-1c623.appspot.com',
	messagingSenderId: '287842658900',
	appId: '1:287842658900:web:cd7f5a0787faf034315bc1',
	measurementId: 'G-BQRCV4C1RX',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore();
const storage = getStorage(app);

export { storage, app, database };
