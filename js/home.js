$(document).ready(function(){
	var banner_choose=$("#banner_dot a");
	var banner=$("#banner_img");
	var list_left=$("#menu_list_left li");
	var pic_index=0;
	/*var width=window.screen.width-17;
	console.log(width);
	$("#head_top").css("width",width+"px");
	$("#head_search").css("width",width+"px");
	$("#head_menu").css("width",width+"px");
	$("#content_wrapper").css("width",width+"px");*/
//焦点图切换效果代码
	//设定定时器，定时切换焦点图
	var timer=setInterval(function(){
		pic_index=(pic_index+1)%3;
		banner.animate({"left":-810*pic_index+"px"},500);
		banner_choose.removeClass("on");
		banner_choose.eq(pic_index).addClass("on");
	},4000);
	//设定焦点图手动切换
	$("#banner_dot a").mouseover(function(){
		var t=$(this);
		clearInterval(timer);
		banner.stop(true,false);//首先要停止掉动画序列，否则在频繁切换的时候会堆积很多动画
		banner_choose.removeClass("on");
		t.addClass("on");
		pic_index=banner_choose.index(t);
		banner.animate({"left":-810*pic_index+"px"},500);
	});
	$("#banner_dot a").mouseout(function(){
		clearInterval(timer);
		timer=setInterval(function(){
			pic_index=(pic_index+1)%3;
			banner.animate({"left":-810*pic_index+"px"},500);
			banner_choose.removeClass("on");
			banner_choose.eq(pic_index).addClass("on");
			},4000);
	});
//二级菜单控制效果代码
	list_left.mouseover(function(){
		var t=$(this);
		t.css({"background-color":"white","border":"white"});
		t.find(".list_title").css("background","none");
		t.find(".list_title a,.list_data a").css("color","black");
		t.find(".list_title a.list_title_2").css("color","white");
		t.find(".sub_menu").css("display","block");
	});
	list_left.mouseout(function(){
		var t=$(this);
		t.css({"background-color":"rgb(69,147,253)","border-bottom":"1px solid rgb(90,161,254)"});
		t.find(".list_title").css({"background":"url(img/arrow_list.jpg) right center no-repeat"});
		t.find(".list_title a,.list_data a").css("color","white");
		t.find(".sub_menu").css("display","none");
	});
});