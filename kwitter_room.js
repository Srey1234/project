function addroom()

{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child( room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem(" room_name", room_name);
      window.location="kwitter_page.html";
}



function redirectToRoomName(name)

{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();




function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html"
}



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
