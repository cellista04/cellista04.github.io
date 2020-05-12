var reg=document.getElementById("registro");
var call=document.getElementById("call");
let video=document.getElementById("video");
function leer(){
	var url=document.location.href;
	if (url.indexOf("?")){
		var clave=url.split("?")[1].split("=")[0];
		reg.style.display="none";
		call.style.display="block";
	}
	navigator.mediaDevices.getUserMedia({audio:true,video:true}).then(function(stream){
		video.srcObject=stream;
	});
}
function finalizar_call(){
	alert ("Saliendo de la videollamada");
	call.style.display="none";
	reg.style.display="block";
}
leer();
