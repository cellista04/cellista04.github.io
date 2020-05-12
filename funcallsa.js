var reg=document.getElementById("registro");
var call=document.getElementById("call");
let video=document.getElementById("video");
var streamAV;
function leer(){
	var url=document.location.href;
	if (url.indexOf("?")){
		var clave=url.split("?")[1].split("=")[0];
		reg.style.display="none";
		call.style.display="block";
	}
	navigator.mediaDevices.getUserMedia({audio:true,video:true}).then(function(stream){
		streamAV=stream;
	});
	video.srcObject=streamAV;
}
function finalizar_call(){
	call.style.display="none";
	reg.style.display="block";
}
leer();
