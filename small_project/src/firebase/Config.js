// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNn7UbbcYGzRmWXXOKApNxavzrof7XT9g",
  authDomain: "gtb-small-project.firebaseapp.com",
  projectId: "gtb-small-project",
  storageBucket: "gtb-small-project.firebasestorage.app",
  messagingSenderId: "32936151411",
  appId: "1:32936151411:web:c4bd78cc625e54ef5d9d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);