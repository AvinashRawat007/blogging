let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyATFHRjUf4QANdbCqsrZI5HprL-BSzwYrE",
    authDomain: "blogging-website-867e9.firebaseapp.com",
    projectId: "blogging-website-867e9",
    storageBucket: "blogging-website-867e9.appspot.com",
    messagingSenderId: "231956327249",
    appId: "1:231956327249:web:82145fe14c221a46374170"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();