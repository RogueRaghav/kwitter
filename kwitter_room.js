
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyA436GnZWKGLa9ZSJ32LLVEXzjClnAPMgk",
  authDomain: "kwitter-85842.firebaseapp.com",
  databaseURL: "https://kwitter-85842-default-rtdb.firebaseio.com",
  projectId: "kwitter-85842",
  storageBucket: "kwitter-85842.appspot.com",
  messagingSenderId: "120948513624",
  appId: "1:120948513624:web:2905b19c8900f784dde32d"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name- "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}