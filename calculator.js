
$(function(){
	gettime();
    setInterval(gettime,1000);
	var $ysf=['+','-','×','÷'];
	$("#tbody ul li:first").hide();
	$(".keshow[value='0']").css("width","93px");
	$(".keshow[value='=']").css({
		height: '73px',
		position: 'absolute',
		bottom: '0',
		right: '0',
		'padding-top': '40px',
		'font-size': '15px'
	});

	$("#label").click(function(event) {
		if($(this).data('k')){
			$(this).parent().animate({"left":0},"fast");
			$("#tbody ul li").attr("class","common").first().hide();
			$(".keshow[value='0']").css("width","93px");
			$(".keshow[value='=']").css({
				height: '73px',
				position: 'absolute',
				bottom: '0',
				right: '0',
				'padding-top': '40px',
				'font-size': '15px'
			});
			$(this).data('k',0);
		}else{
			$(this).parent().animate({"left":-30},"fast");
			$("#tbody ul li").attr("class","science").first().show();
			$(".keshow[value='0']").css("width","35px");
			$(".keshow[value='=']").css({
				height: '30px',
				"padding-top": '6px',
				"font-size": '10px'
			});
			$(this).data('k',1);
		}

	});

	//数字及普通运算符
	$(".keshow:not(input[value='='])").click(function(e) {
        var $shizi=$("#number").text();
		if($shizi=="0"){
			$("#number").text($(this).val())
		}else{
			$("#number").text($shizi+$(this).val())
		}
    });
		//C 全部清空
	$(".keshow[value='C']").click(function(e) {
		$("#number").text("0");
		$("#suan").text("")
    });
	//DEl键
	$(".keshow[value='DEL']").click(function(e) {
        if ($("#number").contents("DEL")){$("#number").text($("#number").text().substr(0,$("#number").text().length-3)) }
		var $btmshizi=$("#number").text();
		var $topshizi=$("#suan").text();
		if($btmshizi=="0"||$btmshizi==""){
			$("#number").text("0")
		}else if($btmshizi!="0"&&$topshizi!=""){
			$("#number").text("0")	;
			$("#suan").text("");
		}else if($btmshizi!="0"&&$topshizi==""){
			console.log($btmshizi);
			if($btmshizi.substr(0,$btmshizi.length-1)==""){
				$("#number").text("0");
			}else{
				$("#number").text($btmshizi.substr(0,$btmshizi.length-1));
			}
		}
    });
		//=键
	$(".keshow[value='=']").click(function(e) {
        var $btmshizi=$("#number").text();
		var $topshizi=$("#suan").text();
		if($btmshizi=="0"||$btmshizi==""){
			$("#number").text("0")
		}else if($btmshizi!="0"){
			if($.inArray($btmshizi,$ysf)>=0){
				console.log($.inArray($btmshizi,$ysf));
			}else{
				$("#suan").text($btmshizi+"=");
				$btmshizi=($btmshizi.replace(/×/,"*")).replace(/÷/,"/");
				$("#number").text(eval($btmshizi));
				console.log($btmshizi);
			}
		}
    });

})

function gettime(){
	var d=new Date();
	var hours="0"+d.getHours();
	hours=hours.substring(hours.length-2,hours.length);
	var mins="0"+d.getMinutes();
	mins=mins.substring(mins.length-2,mins.length);
	var timenow=hours+":"+mins;
	$(".timenow").text(timenow);
}