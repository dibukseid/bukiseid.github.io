$(document).ready(function(){

	$("#hidden").hover(function(){
		$(this).css("color", "black");
	}, 
	function() {
		$(this).css("color", "red");
	});


	$("#pspractice").dblclick(function() {
		$("#practiceimg").hide();
	});

});
