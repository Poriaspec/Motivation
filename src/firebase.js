import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB2jGvV7Nd_to7Vq269rVLHuscRybZEijo",
  authDomain: "motivation-development.firebaseapp.com",
  projectId: "motivation-development",
  storageBucket: "motivation-development.appspot.com",
  messagingSenderId: "130720436442",
  appId: "1:130720436442:web:35a34243d2a19424b1d5e3"
}

 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

 export const signInWithGoogle = ()  => {
 const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
  .then((res)=>{
   console.log(res)
  }).catch((err)=>{
   console.log(err)
  });
 };