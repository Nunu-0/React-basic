import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBzbPyjYxHupikJp9-NKfsiovgedpMk1os",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_KEY,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

console.log(process.env.REACT_APP_FIREBASE_API_KEY);
console.log(firebaseConfig.apiKey)


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;