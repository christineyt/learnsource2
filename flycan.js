function doOPEN(){
	$("#NAV").slideDown(200);
}
	
function doCLOSE(){
	$("#NAV").slideUp(200);
}
	
$("#BTN").on("click", doOPEN );
	
$("#XX").on("click", doCLOSE );
	
	
function clearSTYLE(){
	
	if( $(window).innerWidth()>500 ){
		
		$("#NAV").removeAttr("style");
	}
}

$(window).on("resize",clearSTYLE);



