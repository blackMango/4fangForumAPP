// JavaScript Document

$(function(){
	$("#section > .set figure .ctrlbox .ctrl").click(
		function(){
			$(this).hide().siblings().show();
			$(this).parent().toggleClass("bg");
		}
	);

})
