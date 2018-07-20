// JavaScript Document
$("#previewButton").click(function(){
	var name = $("#name").val();
	var email = $("#email").val();
	var order = $("#order").val();
	$("#displayName").text(name);
	$("#displayEmail").text(email);
	$("#displayOrder").text(order);
	$("#name").val('');
	$("#email").val('');
	$("#order").val('');
	$("#messageDisplay").hide().slideDown(1000).delay(4000).slideUp();
	
	
});