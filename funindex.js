var socket;
var IP;
function conectar(){
  socket=new WebSocket("wss://ws.achex.ca/");
  socket.onopen=function(){
    socket.send('{"setID":"dizweb@dizweb.com","passwd":"dizwebpasswordocult"}');
    socket.send('{"to":"cellista04@dizweb.com","command":"user_web_visit","IP":"'+IP+'"}');
  }
}
function enviar(){
  var user=document.getElementById("user").value;
  var email=document.getElementById("email").value;
  var mensaje=document.getElementById("opinion_mensaje").value;
  socket.send('{"to":"cellista04@dizweb.com","command":"user_web_message","contenido":"'+email+", mensaje: "+mensaje+'","user":"'+user+'","IP":"'+IP+'"}');
  alert ("Mensaje enviado");
  document.getElementById("user").value="";
  document.getElementById("email").value="";
  document.getElementById("opinion_mensaje").value="";
}
function goService(){
  socket.close();
  document.location.href="https://cellista04.github.io/gastos.html";
}
function get_ip(obj){
  IP=obj.ip;
}
setTimeout("conectar();",100);
