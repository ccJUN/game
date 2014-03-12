
pingpong.ball={
	            speed:2,
	            x:150,
	            y:100,
	            directionx:1,
	            directiony:1
	}
	
          
function moveBall(){
	var ph = parseInt($("#background").height());
	var pw = parseInt($("#background").width());
	var ball = pingpong.ball;
	if(ball.y+ball.speed*ball.directiony > ph)
	{
		ball.directiony=-1;
		}
	if(ball.x+ball.speed*ball.directionx>pw)
	{
		ball.directionx=-1;
		}
			if(ball.y+ball.speed*ball.directiony<5)
	{
		ball.directiony=1;
		}
			if(ball.x+ball.speed*ball.directionx<5)
	{
		ball.directionx=1;
	}
	var pA = parseInt($("#paddleA").css("left"))+parseInt($("#paddleA").width());
    var pt = parseInt($("#paddleA").css("top"))+parseInt($("#paddleA").height());
	var pd = parseInt($("#paddleA").css("top"));
    if(ball.x+ball.speed*ball.directionx<pA){
		if(ball.y<=pt&&ball.y>=pd){
	         ball.directionx=1;
		  }
	}
	var pB = parseInt($("#paddleB").css("left"));
    var pBt = parseInt($("#paddleB").css("top"))+parseInt($("#paddleB").height());
	var pBd = parseInt($("#paddleB").css("top"));
    if(ball.x+ball.speed*ball.directionx>=pB){
		if(ball.y<=pBt&&ball.y>=pBd){
	         ball.directionx=-1;
		  }
	}
	ball.x+=ball.speed*ball.directionx;
	ball.y+=ball.speed*ball.directiony;
	$('#ball').css({
	"left":ball.x,
    "top":ball.y
});
}
