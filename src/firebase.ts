// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDnJYVO-SQOUMdXr1EfNFv53fkZXI-Aso8',
  authDomain: 'books-761c0.firebaseapp.com',
  projectId: 'books-761c0',
  storageBucket: 'books-761c0.appspot.com',
  messagingSenderId: '1047447647038',
  appId: '1:1047447647038:web:9f3fccbd46a1402875b26f',
  measurementId: 'G-HQ05QDQVT3'
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
