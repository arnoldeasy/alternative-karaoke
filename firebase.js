import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCt6X01DRrsMMCh5fV5LHF3eVDFyAyEmhk",
  authDomain: "alternative-karaoke.firebaseapp.com",
  projectId: "alternative-karaoke",
  storageBucket: "alternative-karaoke.firebasestorage.app",
  messagingSenderId: "213738414009",
  appId: "1:213738414009:web:8eaff574d81d735cba2068"
};


const app=initializeApp(firebaseConfig);

export const db=getFirestore(app);
