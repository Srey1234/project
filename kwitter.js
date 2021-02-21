var firebaseConfig = {
    apiKey: "AIzaSyB04R3cIpd267hZbrxIgAozS7U1Eo5NvpU",
    authDomain: "kwitter-54cc9.firebaseapp.com",
    databaseURL: "https://kwitter-54cc9-default-rtdb.firebaseio.com",
    projectId: "kwitter-54cc9",
    storageBucket: "kwitter-54cc9.appspot.com",
    messagingSenderId: "505446377706",
    appId: "1:505446377706:web:0c7c069e7658298c1ecf93",
    measurementId: "G-BLV3EH3ZPF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE



user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";




function addUser()
{
    user_name=document.getElementById("user_name").value;

    localStorage.setItem("user_name",user_name);

    window.location="kwitter_room.html";
}



