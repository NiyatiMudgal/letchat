function add_user()
{
   user= document.getElementById("username").value;
localStorage.setItem("name", user);
window.location = "kwitter_room.html";
}
