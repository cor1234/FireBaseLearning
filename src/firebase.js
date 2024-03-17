import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBoG-3oQmS4_WFy3IN0Jb60w4--DPd0Wp4",
    authDomain: "app-3b5fa.firebaseapp.com",
    projectId: "app-3b5fa",
    storageBucket: "app-3b5fa.appspot.com",
    messagingSenderId: "706020348027",
    appId: "1:706020348027:web:636d50861605faa593d2de",
    databaseURL:"https://app-3b5fa-default-rtdb.firebaseio.com"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);