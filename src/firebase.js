import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8Ljb5ql7B2pVaoaP5dIruSOjgrH296oE",
    authDomain: "disney-clone123.firebaseapp.com",
    projectId: "disney-clone123",
    storageBucket: "disney-clone123.appspot.com",
    messagingSenderId: "732191591412",
    appId: "1:732191591412:web:78baa8403dbb4318a7c7a1",
    measurementId: "G-L5DW295EXP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;