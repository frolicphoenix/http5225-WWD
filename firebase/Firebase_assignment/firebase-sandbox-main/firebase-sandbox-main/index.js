// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlQ7nEviws_4HzOGHmfV7JpFirDcYOg3E",
  authDomain: "my-first-project-2351f.firebaseapp.com",
  databaseURL: "https://my-first-project-2351f-default-rtdb.firebaseio.com",
  projectId: "my-first-project-2351f",
  storageBucket: "my-first-project-2351f.appspot.com",
  messagingSenderId: "117765982739",
  appId: "1:117765982739:web:2c801ed9ecf5f1bf938de6",
  measurementId: "G-N2MGMV4D85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase();

// Fetch messages
const messages = ref(database, "/Comments");

// On data event
onValue(
  messages,
  (snapshot) => {
    // Create a reference to the ul element
    const ul = document.getElementById("messages");

    // Empty the ul emelemt
    ul.replaceChildren();

    // Loop through messages
    snapshot.forEach((childSnapshot) => {
      // Get key and children
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      console.log(childKey);
      console.log(childData);

      // Add message to list
      const text = document.createTextNode(childData.text);
      const li = document.createElement("li");
      li.appendChild(text);
      ul.appendChild(li);
    });
  },
  {
    onlyOnce: false,
  }
);
