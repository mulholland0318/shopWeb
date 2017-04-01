/**
 * Created by Adminis on 2016/10/27.
 */
$(function(){
	// 底部导航

	$('#parent li').eq(0).find('p').css("color","#fece00");
	$('#parent li').eq(0).find('img').attr('src','images/foot_2.png');


	$("#parent li img").click(function(){
		$("#parent p").css("color","black");
		$(this).find("p").css("color","#fece00");

		//var imgs=['images/foot2.png','images/foot3.png','images/foot1.png'];
		//var nowImgs=['images/foot_2.png','images/foot_3.png','images/foot_1.png'];
		//for(var i=0;i<imgs.length;i++){
		//	if($(this).find('img').attr('src')==imgs[i]){
		//		for(var j=0;j<imgs.length;j++){
		//			$('#parent li').eq(j).find('img').attr('src',imgs[j]);
		//		}
		//		$(this).find('img').attr('src',nowImgs[i]);
		//	}
		//}

	});
	function changeImg(){
		var imgs=['images/foot2.png','images/foot3.png','images/foot1.png'];
		for(var i=0;i<imgs.length;i++){
			$('#parent li').eq(i).find('img').attr('src',imgs[i]);
		}
	}
	function changeFont(){
		$('#parent p').css("color","#000");
	}
	if(window.location.href.indexOf("order.html")>0){
		changeImg();
		changeFont();
		$("#parent img")[1].src = "images/foot_3.png";
		$("#parent li").eq(1).find('p').css("color","#fece00");
	}else if(window.location.href.indexOf("index.html")>0){
		changeImg();
		changeFont();
		$("#parent img")[0].src = "images/foot_2.png";
		$("#parent li").eq(0).find('p').css("color","#fece00");
	}else if(window.location.href.indexOf("my.html")>0){
		changeImg();
		changeFont();
		$("#parent img")[2].src = "images/foot_1.png";
		$("#parent li").eq(2).find('p').css("color","#fece00");
	}

   // 退出登录
    $(".denlu").click(function () {
        $(".tc").show();
    })
    $("#quxiao").click(function () {
        $(".tc").hide();
    })
    // 客服电话
//    $("#wenzi").click(function () {
//        $(".kfdh").fadeIn()
//    })
//    $("#but_8").click(function () {
//        $(".kfdh").fadeOut()
//    })
    $(".phone").click(function () {

    })
    
    addIdentify();
});

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

var costum_phone = GetQueryString("ie");
var costum_token = GetQueryString("tn");
var costum_openid = GetQueryString("od");
var register_page = "/wxchat/html/register.html?note=1&od="+costum_openid+"&ie="+costum_phone;

var params = "?od="+costum_openid+"&ie="+costum_phone+"&tn="+costum_token;
var pic_partern_head = "/uploadFiles/uploadImgs/chefhead/";
var pic_partern_dish = "/uploadFiles/uploadImgs/chefdishes/";

function addIdentify(){
	$("[href=\"index.html\"]").attr("href","index.html" + params);
//	if(!costum_token || costum_token == "null"){
//		window.location.href = "http://test.mdachu.com/webaction/goToForwardPage";
//	}else{
		$("[href=\"my.html\"]").attr("href","my.html" + params);
		$("[href=\"order.html\"]").attr("href","order.html" + params);
//	}
}

function dealWithReturnValue(msgCode){
	if(msgCode == 1){
		alert("服务器繁忙，请稍后重试！");
		location.href = history.go(-1);
	}else if(msgCode == 5){
		window.location.href = register_page;
	}
}

function check_login(toPage){
	if(!costum_openid || costum_openid == "null") return;
	if(costum_token != "null" && costum_token) return;
	
	$.ajax({
        type: "POST", //用POST方式传输
        dataType: "json", //数据格式:JSON
        url: '/webaction/queryParam',
        async: false,
        data: {"od":costum_openid},
        error: function (XMLHttpRequest, textStatus, errorThrown) { },
        success: function (data){
        	dealWithReturnValue(data.msgCode);
        	costum_phone = data.content.phone;
        	costum_token = data.content.token;
        	register_page = "/wxchat/html/register.html?note=1&od="+costum_openid+"&ie="+costum_phone;
        	params = "?od="+costum_openid+"&ie="+costum_phone+"&tn="+costum_token;
        	if(!costum_token || costum_token == "null"){
        		window.location.href = register_page;
        	}
        	addIdentify();
        }
    });
}

function scrollGetData(callBack){
	$(window).scroll(function () {
		if ($(window).scrollTop() >= ($(document).height() - $(window).height())) {
			callBack();
		}
	});
}
