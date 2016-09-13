// JavaScript Document

$(function(){
	$("#section > .password .img img").eq(1).hide();
	$("#section > .password .img img").click(
		function(){
			$(this).hide().siblings().show();
		}
	);
	
})
