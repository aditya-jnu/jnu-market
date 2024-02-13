import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuFK3OLGjzJ_hSJo546aIMwQOv7COYnf0",
  authDomain: "handmeup-d4ec5.firebaseapp.com",
  projectId: "handmeup-d4ec5",
  storageBucket: "handmeup-d4ec5.appspot.com",
  messagingSenderId: "1033251667215",
  appId: "1:1033251667215:web:146827192eba6bb485927a",
  measurementId: "G-LB9R1XPSSC"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);