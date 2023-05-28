import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyBJ16n2rs5tnmwUDNoHo8dVI8kEYJUjarE",

    authDomain: "listed-cf659.firebaseapp.com",

    projectId: "listed-cf659",

    storageBucket: "listed-cf659.appspot.com",

    messagingSenderId: "586179396185",

    appId: "1:586179396185:web:30455d0b33699314cce748"

};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export default app;
