// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){	
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"Aplicaion7","Ok"});
});
$('#derecha').on("swiperight",function(){
	navigator.notification.confirm("¿Que deseas hacer?",function(op){
		switch(op)
		{
			case 1:
			navigator.notification.beep(1);
			break;
			
			case 2:
			navigator.notification.vibrate(1500);
			break;
		}
	},"aplicacion 7","sonar,vibrar,cancelar");
});
},false);
});