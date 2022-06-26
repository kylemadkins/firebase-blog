import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBa3vvwKdIbZ66MJcO1KnukA1gTs8UpQgM",
  authDomain: "fir-blog-63776.firebaseapp.com",
  projectId: "fir-blog-63776",
  storageBucket: "fir-blog-63776.appspot.com",
  messagingSenderId: "686704605453",
  appId: "1:686704605453:web:15cc2eec660f8ca4b25844"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
