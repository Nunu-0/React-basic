const firebaseConfig = {
  apiKey: "AIzaSyBzbPyjYxHupikJp9-NKfsiovgedpMk1os",
  authDomain: "business-card-maker-28861.firebaseapp.com",
  databaseURL: "https://business-card-maker-28861-default-rtdb.firebaseio.com",
  projectId: "business-card-maker-28861",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
firebase.analytics();