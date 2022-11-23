

var firebaseConfig = {
      apiKey: "AIzaSyBEo32GI2nJ-vR-OqDtRQfa_lCcikP9dYM",
      authDomain: "kwitter-db-49d81.firebaseapp.com",
      databaseURL: "https://kwitter-db-49d81-default-rtdb.firebaseio.com",
      projectId: "kwitter-db-49d81",
      storageBucket: "kwitter-db-49d81.appspot.com",
      messagingSenderId: "895227473389",
      appId: "1:895227473389:web:bdd9599905f6d21296cbe4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
