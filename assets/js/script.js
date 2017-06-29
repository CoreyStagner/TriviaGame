$(document).ready(function(){
	hideMe("#game");
	//Standard Calls

	function log(e){
		console.log(e);
	};
	
	log("Document Ready!")

	//Game Creation

	var counter = 60;
	var correctGuess = 0;
	var incorrectGuess = 0;
	function hideMe(e){
		$(e).hide();
	}

	function showMe(e){
		$(e).show();
	}



	function timer(i){
		counter--; 
		$("#announcement").html("<h2 style='text-align:right'>You have " + counter + " seconds remaining!</h2>")
		if(counter === 0 ){
			stopGame();
			$("#announcement").html("<h2 style='text-align:center'>You have run out of time</h2>")
			hideMe("#game");
			var pa = confirm("Would you like to try again?")
				if(pa === true){
					startGame();
				} else{
					showAnswers();
				}

		}
	}

	function startGame(){
		counter = 60;
		correctGuess = 0;
		incorrectGuess = 0;	
		timer();
		hideMe("#rules");
		hideMe("#newGameBtn");
		showMe("#game");
		remaining = setInterval(timer, 1000);
	}

	function stopGame(){
		hideMe("#game");
		console.log("Game was stopped");
		clearInterval(remaining);
	}

	function showAnswers(){
		hideMe("#game");
		showMe("#correctAnswers");
	}

	function gameCheck(){
		


		// var q1 = "";
		// var q2 = "";
		// var q3 = "";
		// var q4 = "";
		// var q5 = "";
		// var q6 = "";
		// var q7 = "";
		// var q8 = "";
		// var q9 = "";
		// var q10 = "";
	}

	/////////////////////////////////////////////////
	// Events
	/////////////////////////////////////////////////
	
	$("#newGameBtn").click(function(){
		startGame();
	})// End New Game Query

	$("#finishGameBtn").click(function(){		
		// Verify that user put an answer for each question
		// if (!$("input[name='q1']").is("checked") || 
		// 	!$("#q2").is("checked") ||
		// 	!$("#q3").is("checked") ||
		// 	!$("#q4").is("checked") ||
		// 	!$("#q5").is("checked") ||
		// 	!$("#q6").is("checked") ||
		// 	!$("#q7").is("checked") ||
		// 	!$("#q8").is("checked") ||
		// 	!$("#q9").is("checked") ||
		// 	!$("#q10").is("checked")
		// ) {            
		// alert("Please answer all of the questions!");        
		// } else {
			var a1 = "d";
			var a2 = "";
			var a3 = "";
			var a4 = "";
			var a5 = "";
			var a6 = "";
			var a7 = "";
			var a8 = "";
			var a9 = "";
			var a10 = "";
			var guess1 = $("input[name='q1']:checked").val();
			var guess2 = $("input[name='q2']:checked").val();
			var guess3 = $("input[name='q3']:checked").val();
			var guess4 = $("input[name='q4']:checked").val();
			var guess5 = $("input[name='q5']:checked").val();
			var guess6 = $("input[name='q6']:checked").val();
			var guess7 = $("input[name='q7']:checked").val();
			var guess8 = $("input[name='q8']:checked").val();
			var guess9 = $("input[name='q9']:checked").val();
			var guess10 = $("input[name='q10']:checked").val();
			log(guess1);
			log(guess2);
			log(guess3);
			log(guess4);
			log(guess5);
			log(guess6);
			log(guess7);
			log(guess8);
			log(guess9);
			log(guess10);

			if(guess1 === a1){
				correctGuess++;
				log("You answered Question 1 correctly.")
			} else if(guess1 === "a"){
				incorrectGuess++;
				alert("YOU ARE A JERK FOR SAYING THAT I SUCK!!!!!!!!!!!!!!");
				log("JERK!!! Wrong!"); 
			} else {
				incorrectGuess++;
				log("You answered Question 1 incorrectly.")
			}

		// }
	})// End Finish Game Query

	$("#resetGameBtn").click(function(){
		startGame();
	})// End Reset Game Query

	$("#stopGameBtn").click(function(){
		stopGame();
	})// End Stop Game Query
	
});//End Document Ready Query