//index JavaScript Document
$(function(){
	
	
	
	/*main*/
    var aheigth=window.innerHeight;
    $(".kefu").hide();
	$(".zhiding").click(function(){
		
		$('html,body').animate({'scrollTop':0},500);
		$(".zhiding").hide();	
		$(".wraps").scrollTop("0px");
		$("#s2-wrap").scrollTop(0);
		$(".slimScrollBar").css("top","0px");
	
	});


$(".bar-box a").mouseover(function(e) {
    $(this).find("span").hide();
	$(this).find("p").show();
});


$(".bar-box a").mouseout(function(e) {
    $(this).find("span").show();
	$(this).find("p").hide();
	
});
var m1=$("#m1 li");
var m2=$("#m2 li");
var m3=$("#m3 li");
var m4=$("#m4 li");
var m1length=$("#m1 li").length;
var m2length=$("#m2 li").length;
var m3length=$("#m3 li").length;
var m4length=$("#m4 li").length;
m1.width(100/m1length+"%");
m2.width(100/m2length+"%");
m3.width(100/m3length+"%");
m4.width(100/m4length+"%");
$(".service-box").height(aheigth-85);
	
/*公用js*/	
	
	
/*火狐*/	
if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){ 
   $(".s1-con").css({"height":parseInt(aheigth)-366+"px"});
	 $(".zhiding").hide();
	$(".kefu").hide();
	$(document).scroll(function(){
	 var b=window.scrollY;
	 if(b>600){
		 $(".zhiding").fadeIn(200);
		 $(".kefu").fadeIn(200);
		 }else{
	     $(".zhiding").fadeOut(200);
		 $(".kefu").fadeOut(200);
		 }
   });
   
   //alert ("检测到您的浏览器是火狐,为了能有更好的体验请您更换其他浏览器");
   
}else{
	
	
	$(".zhiding").hide();
	$(".kefu").hide();
	$("#s2-wrap").slimScroll({
            height:aheigth,
			width:"100%",
			allowPageScroll:true,
			alwaysVisible:false,
			color:'#fff',//滚动条颜色,默认#000000
			wheelStep:'12px',//滚动条滚动值,默认10px
			touchScrollStep:3000,
        });	
	$('#fuhua').fullpage({
		//sectionsColor: ['#fff', '#fff'],
		//navigation: true,//小圆点导航
		//navigationPosition:'right',//导航在右
		//navigationTooltips:['1','2'],//鼠标经过小圆点导航时显示说明
		//showActiveTooltip:true,//显示小圆点导航说明 默认不显示
		//scrollingSpeed:700 切换速度
		anchors:['page1','page2'],//锚链接
		//loopTop:true, 循环滚动
		//loopBottom:true,循环滚动
		//loopHorizontal:true ,  "slide循环滚动"
		//autoScrolling:false,  //关闭翻页滚动，页面按照滚动条滚动
		scrollBar:true,//右侧出现滚动条
		paddingTop:'0px',//头部内边距出多少
		//paddingBottom:'0px',//底部内边距多少
		fixedElements:'header',//定位div id固定顶部
		//touchSensitivity:1//滑动敏感度,默认5，最高100，越高滑动越困难
		//continuousVertical:true//页面是否循环滚动,默认false
		//meum:'#nav',
		//sectionSelector:section,//section选择器，默认section
		//slideSelector:slide,//slide选择器，默认slide
		verticalCentered:false,//内容垂直居中
		//resize:true,//文字随窗口大小变化
		//scrollBar:false,//文本超出显示滚动条
		scrollOverflow:true,
afterLoad:function(link,index){		 				
					switch(index){
							case 1:
							break;
							case 2:
							$(".zhiding").fadeIn(300);
							$(".kefu").fadeIn(300);
							//if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){  
							//setAllowScrolling(true,[down]);
							//}
							break;
							default:
							break;
								}
	},//当鼠标进入section触动动画
onLeave:function(index,nextIndex,direction){
			if(direction=="down"){
			switch(index){
			case 1:
			$("#head").fadeOut(300);
			break;	
			case 2:
			break;		
			default:
	        break;
}}else if(direction=="up"){	  
		  switch(index){
           	case 1:
			$(".zhiding").fadeOut(300);
			$(".kefu").fadeOut(300);
            break;
			case 2:

$("#head").fadeOut(300);
var secrolltop=$("#s2-wrap").scrollTop();
if(secrolltop==0){
	$("#head").fadeIn(300);	
	$(".zhiding").fadeOut(300);	
	$(".kefu").fadeOut(300);
}else{	
/*取消上翻页*/setAllowScrolling(true,[up]);
           
	}


			break;	
			default:
		    break;
}//if
}//switch
},//onleave
});//fullpage
}//非火狐
});