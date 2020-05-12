var inicio=document.getElementById("inicio");
var chat=document.getElementById("chat");
var mensajes=document.getElementById("mensajes");
var email;
var name;
var password;
var user;
var socket;
var admin=false;
function crear(){
  name=document.getElementById("name_C").value;
  email=document.getElementById("email_c").value;
  user=document.getElementById("user_c").value;
  password=document.getElementById("clave_c").value;
  admin=true;
}
