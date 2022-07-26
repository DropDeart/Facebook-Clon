import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyALMgxXTXQklQuphsyHV5G-y-SzYngNSOw',
  authDomain: 'facebook-clone-81ebc.firebaseapp.com',
  projectId: 'facebook-clone-81ebc',
  storageBucket: 'facebook-clone-81ebc.appspot.com',
  messagingSenderId: '419489797587',
  appId: '1:419489797587:web:8358cc81e34874008b0b26',
  measurementId: 'G-HDDF69B8GZ',
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const authentication = getAuth(app)
export default db;