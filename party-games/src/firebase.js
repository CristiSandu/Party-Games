import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut, signInAnonymously} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBL0XDg_ljRpp4-w4xGxvg0H-i0UeX94PM",
  authDomain: "party-games-8d4f5.firebaseapp.com",
  projectId: "party-games-8d4f5",
  storageBucket: "party-games-8d4f5.appspot.com",
  messagingSenderId: "824461704292",
  appId: "1:824461704292:web:3ef0b32f42c5b362a3f371",
  measurementId: "G-BM6HZQZPXH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signInAnon = () => {
    try {
        signInAnonymously(auth);
    } catch (err) {
		console.error(err);
		alert(err.message);
	}
}

const signIn = async (email, password) => {
	try {
		signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};


const signUp = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
        await setDoc(doc(db, "Users", user.uid), {
           name: name,
           email: email
        });
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const signOut = () => {
	firebaseSignOut(auth);
};

export {
    auth,
    db,
    signIn,
    signInAnon,
    signOut,
    signUp,
};