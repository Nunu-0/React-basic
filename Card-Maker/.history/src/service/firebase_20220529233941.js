// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzbPyjYxHupikJp9-NKfsiovgedpMk1os",
  authDomain: "business-card-maker-28861.firebaseapp.com",
  databaseURL: "https://business-card-maker-28861-default-rtdb.firebaseio.com",
  projectId: "business-card-maker-28861",
  storageBucket: "business-card-maker-28861.appspot.com",
  messagingSenderId: "792065610935",
  appId: "1:792065610935:web:19706142242a6626bae932",
  measurementId: "G-T705LDNWQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);