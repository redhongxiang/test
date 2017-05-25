function test(){
	$("#oul").animate({"margin-left":"-190px"},{
		easing:'linear',
		duration:1000,
		complete:function(){
	$("#oul li:eq(0)").appendTo($("#oul"));
	$("#oul").css({"margin-left":0});
}
	})};
var time=setInterval(test,1000);
