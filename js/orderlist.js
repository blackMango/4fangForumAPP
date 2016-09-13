// JavaScript Document

$(function(){
	$("#header > #nav > ul li").click(
		function (){
			$(this).addClass("current").siblings().removeClass("current");
		}
	);
})
