/**
 * Created by Administrator on 2016/11/12 0012.
 */
var content_rl;
$(function(){
    $(".inner").click(function(){
        $(".inp").val("");
        $(this).addClass("time_new").siblings().removeClass("time_new")
        $(this).addClass("new_c").siblings().removeClass(" new_c")
        var index = $(".inner").index(this);
        initCalendar_date(content_rl[index]);
    });
    $(".date").click(function(){
        if($(this).attr("class")!="date dete_a1"){
            $(".inp").val("");
            $(this).addClass("date_new").siblings().removeClass("date_new")
        }
    });
    $("#but_1").click(function(){
    	if($(".date_new").text() == "") return;
        $("#inp").val($(".time_new p:eq(0)").text()+" "+new Date().getFullYear()+"-"+ $(".time_new p:eq(1)").text() +" "+ $(".date_new").text());
    });
    $("#but_2").click(function(){
        $(".clendar_o").fadeOut();
    });
    $("#but_1").click(function(){
        $(".clendar_o").fadeOut();
    });
    $("#inp").click(function(){
        $(".clendar_o").fadeIn();
    });
    $(".clendar_o1").click(function(){
        $(".clendar_o").fadeOut();
    });
})

function initCalendar_date(times){
	for(var p in times){
		if(times[p] == 0 && p.substring(0,2) == "t_"){
			var str = p.substring(2,4) + ":" + p.substring(4,6);
			$("div.date:contains('"+str+"')").attr("class", "date dete_a1");
		}else if(p.substring(0,2) == "t_"){
			var str = p.substring(2,4) + ":" + p.substring(4,6);
			$("div.date:contains('"+str+"')").attr("class", "date");
		}
	}
}