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
  socket.send('{"setID":"'+name+'","passwd":"'+password+'"}');
}
function conectar(){
  name=document.getElementById("name_u").value;
  email=document.getElementById("email_u").value;
  user=document.getElementById("user_u").value;
  password=document.getElementById("clave_u").value;
  admin=false;
  socket.send('{"setID":"'+name+'","passwd":"'+password+'"}');
}
function conect(){
  socket=new WebSocket("wss://ws.achex.ca/");
}
setTimeout("conect();",500);
