
	var canvas = document.getElementById('game');
	var canHgt = canvas.height;
	var canWdt = canvas.width;
	var context = canvas.getContext("2d");
	var ballX = 5;
	var ballspeedX = 5;
	var ballY = 5;
	var ballspeedY = 5;
	var paddleX = 0;
	var score = 0;
	var hit = 0;
	var scoreTxt = "Score : ";

	window.onload = function(){

		setInterval(function(){
			moveElement();
			drawRectElement(0, 0, canWdt, canHgt, "#000"); //Black Stage
			drawRectElement(ballX, ballY, 10, 10, "#FFFFFF"); // ball 
			drawRectElement(paddleX, (canHgt - 10), 100, 10, "#FFFFFF"); // paddle
			drawTextElement(scoreTxt,canWdt -100 ,50, "20px Arial", "#FFFFFF");

			scoreTxt = 'Score : '+score/2;
		},1000/30);

		/*canvas.addEventListener("mouseover", function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        paddleX = mousePos.x;
        console.log(evt.clientX);
      }, false);
      */
		
	}

	function drawTextElement(txt, xCord, yCord, font, color){
		context.fillStyle = color; 
		context.font = font;
		context.fillText(txt, xCord, yCord);
	} 

	function drawRectElement(xCord, yCord, xWidth , yHeight , color){
		context.fillStyle = color;
		context.fillRect(xCord, yCord, xWidth, yHeight);
	} 

	function moveElement(){
		// move element on canvas
		ballX = ballX + ballspeedX * 0.5;
		ballY = ballY + ballspeedY;
		if(ballX < 0){
			ballspeedX = ballspeedX + 5;
		}
		if(ballX > canWdt){
			ballspeedX = (ballspeedX - 5);
		}
			
		if(ballY < 0){	
			ballspeedY = ballspeedY + 5;	
		}
		if(ballY > canHgt){		

			if((ballX > paddleX) && (ballX < paddleX + 100)){
				ballspeedY = ballspeedY - 5;
				score = score + 1;
			}else{
				ballReset();
				ballspeedY = ballspeedY - 5;
				hit = 0;
			}
			
		}
		

	}

	function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

    function addjustPaddleX(evt){
    	paddleX = evt.clientX;
  		/*console.log(
    	"clientX value: " + evt.clientX + "\n"
    	+ "clientY value: " + evt.clientY + "\n"
  		);*/
	}

	function ballReset(){
		ballX = canWdt /2;
		ballY = canHgt /2;
		ballspeedY = ballspeedY - 5;
		score = 0;
	}
