import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJdghgT2wyrq-NnHsYzbQ49VuFMWjL4gQ",
  authDomain: "vue-todo-app-98429.firebaseapp.com",
  projectId: "vue-todo-app-98429",
  storageBucket: "vue-todo-app-98429.appspot.com",
  messagingSenderId: "361083421122",
  appId: "1:361083421122:web:498d62e58a87c9647a565b"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const db = getFirestore(app);