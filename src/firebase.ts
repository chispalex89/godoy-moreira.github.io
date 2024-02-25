import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCynsYLkl-RTAUc5AF7u9ogKZXBrD3Hoc4',
  authDomain: 'wedding-invitation-59bf4.firebaseapp.com',
  projectId: 'wedding-invitation-59bf4',
  storageBucket: 'wedding-invitation-59bf4.appspot.com',
  messagingSenderId: '506391687273',
  appId: '1:506391687273:web:1fee55eb8e1073063632f8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

