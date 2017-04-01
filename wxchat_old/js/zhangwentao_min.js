
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
	if(costum_token && costum_token != "null") return;
	
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
        		window.location.href = "/wxchat/html/register.html?note=1&od="+costum_openid+"&ie="+costum_phone;
        	}
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
