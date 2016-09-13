// JavaScript Document

$(function(){
		
	$("#section > .actcontent .actcontentbox").eq(0).show().siblings().hide();
	$("#section > ul li").click(
		function(){
			$(this).addClass("bgcolor").siblings().removeClass("bgcolor");
			$("#section > .actcontent .actcontentbox").eq($(this).index()).show().siblings().hide();
		}
	);
	
})












