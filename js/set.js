// JavaScript Document

$(function(){
	$("#section > .set figure .ctrlbox .ctrl").click(
		function(){
			$(this).hide().siblings().show();
			$(this).parent().toggleClass("bg");
		}
	);
	$("#section > .set .relievebound").click(
		function(){
			$("#bg").fadeIn();
			$(".relieveboundbox").fadeIn();
			$("body").addClass("fix");
		}
	);
	$("#section > .set .savesite").click(
		function(){
			$("#bg").fadeIn();
			$(".savesitebox").fadeIn();
			$("body").addClass("fix");
		}
	);
	$(".savesitebox .card:eq(0) span").click(
		function(){
			$("#section > .set .savesite span").eq(0).show();
			$("#section > .set .savesite span").eq(1).hide();
			$("#bg").fadeOut();
			$(".savesitebox").fadeOut();
			$("body").removeClass("fix");
		}
	)
	$(".savesitebox .card:eq(1) span").click(
		function(){
			$("#section > .set .savesite span").eq(1).show();
			$("#section > .set .savesite span").eq(0).hide();
			$("#bg").fadeOut();
			$(".savesitebox").fadeOut();
			$("body").removeClass("fix");
		}
	)
	$("#section > .set .buffer").click(
		function(){
			$(this).find("span").eq(0).hide();
			$(this).find("span").eq(1).show();
		}
	)


})
