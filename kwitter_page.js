//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
a="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4> ";
ab="<h4 class='message_h4'>"+message+"</h4>"
b="<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
c="<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span></button><hr>";
row=a+ab+b+c;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("click.thelikebutton"+message_id);
      buttonid=message_id;
      likes=document.getElementById(buttonid).value;
      updatedlikes=Number(likes)+1;
      console.log(updatedlikes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedlikes
      });
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}