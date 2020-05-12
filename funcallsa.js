var reg=document.getElementById("registro");
var call=document.getElementById("call");
function leer(){
	var url=document.location.href;
	if (url.indexOf("?")){
		var clave=url.split("?")[1].split("=")[0];
		reg.style.display="none";
		call.style.display="block";
	}
}
leer();
function finalizar_call(){
	call.style.display="none";
	reg.style.display="block";
}
