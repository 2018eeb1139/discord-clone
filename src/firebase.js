// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKU3loL051QWlJhGQoCYCoD2DY8V8qrzE",
  authDomain: "discord-clone-c545c.firebaseapp.com",
  projectId: "discord-clone-c545c",
  storageBucket: "discord-clone-c545c.appspot.com",
  messagingSenderId: "273079488960",
  appId: "1:273079488960:web:6d95fca9d271994a3a3825",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
