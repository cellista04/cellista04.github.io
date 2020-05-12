var reg=document.getElementById("registro");
var call=document.getElementById("call");
let video=document.getElementById("video");
var admin=false;
var password;
var user;
var correo;
function leer(){
	var url=document.location.href;
	if (url.indexOf("?")){
		password=url.split("?")[1].split("=")[0];
		reg.style.display="none";
		call.style.display="block";
	}
	admin=false;
	navigator.mediaDevices.getUserMedia({audio:true,video:true}).then(function(stream){
		video.srcObject=stream;
	});
	user=prompt("Nombre y apellidos: ");
	correo=prompt("Email: ");
}
function createCall(){
	admin=true;
	user=prompt("Nombre y apellidos: ");
	correo=prompt("Email: ");
	password=prompt("Clave para tu reunión (toda junta): ");
}
function finalizarCall(){
	document.location.href="https://cellista04.github.io/";
}
leer();
