// JavaScript Document

$(function(){
	/*$(".footmenu > figcaption figure").click(
		function(){
			$(this).addClass("currentlogo").siblings().removeClass("currentlogo");
			$(".footmenu > hgroup a").eq($(this).index()).addClass("color").siblings().removeClass("color");
		}
	);*/
		
	$("#rec").click(
		function(){
			$(document).scrollTop(0);
		}
	);
	$(document).scroll(
		function(){
			toppos = $(document).scrollTop();
			if(toppos > 30){
				$("#rec").fadeIn();
				$("#section > .searchbox > .search").addClass("width");
				$("#section > .searchbox > figure").css("display","none");
			}else if(toppos == 0){
				$("#rec").fadeOut();
				$("#section > .searchbox > .search").removeClass("width");
				$("#section > .searchbox > figure").css("display","block");
			}
		}
	);
	
	$("#section > .banner .bannerbox .photobox img").eq(0).show().siblings().hide();
	var size = $("#section > .banner .ctrlboxsmall .ctrl").length;
	var i=0;
	var t=setInterval(move,2000);
	function move(){
		i++;
		if(i==size){
			i=0;
		}
		$("#section > .banner .ctrlboxsmall .ctrl").eq(i).addClass("current").siblings().removeClass("current");
		$("#section > .banner .bannerbox .photobox img").eq(i).show().siblings().hide();
	}
	
	/*$("#section > .banner .ctrlboxsmall .ctrl").click(
		function(){
			$(this).addClass("current").siblings().removeClass("current");
			$("#section > .banner .bannerbox .photobox img").eq($(this).index()).show().siblings().hide();
		}
	);*/
	var t = setInterval(
		function(){
			$("#section > .hot hgroup").animate({marginTop:-32},2000,function(){
				$("#section > .hot hgroup h4:last").after($("#section > .hot hgroup h4:first"));
				$("#section > .hot hgroup").css({marginTop:0});
			});
		},3000
	);
	
})
