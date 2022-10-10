// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBPkcBeMP6CLmQwvwmj7iqjXi8yIq0iQVs",
    authDomain: "project-100-b8142.firebaseapp.com",
    databaseURL: "https://project-100-b8142-default-rtdb.firebaseio.com",
    projectId: "project-100-b8142",
    storageBucket: "project-100-b8142.appspot.com",
    messagingSenderId: "101093329931",
    appId: "1:101093329931:web:a1ac697bd1c3b189430b0e",
    measurementId: "G-T8QFJ93VB8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html"
}
 function addRoom()
 {
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding room"
    });
    
    localStorage.setItem("room_name", room_name);

    window.location = "chat_room.html";
    
}