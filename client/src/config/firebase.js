import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAVCgGeK3g_hUVLKU9dzF3iebiFNTxPJpM",
    authDomain: "ecommerce-app-3c520.firebaseapp.com",
    projectId: "ecommerce-app-3c520",
    storageBucket: "ecommerce-app-3c520.appspot.com",
    messagingSenderId: "23985368965",
    appId: "1:23985368965:web:bda4709ed2e287c5b29eec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
export { app, auth, googleAuthProvider, githubAuthProvider }