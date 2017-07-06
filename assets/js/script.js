$(document).ready(function(){
	hideMe("#game");
	hideMe("#results");
	//Standard Calls

	function log(e){
		console.log(e);
	};
	
	log("Document Ready!")

	//Game Creation

	var counter = 90;
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
		$("#stopwatch").html("<h2 style='text-align:right'>You have " + counter + " seconds remaining!</h2>")
		if(counter === 0 ){
			endGame();
			// $("#announcement").html("<h2 style='text-align:center'>You have run out of time</h2>")
			// hideMe("#game");
			// var pa = confirm("Would you like to try again?")
			// 	if(pa === true){
			// 		startGame();
			// 	} else{
			// 		showAnswers();
			// 	}
		}
	}

	function startGame(){
		showMe("#stopwatch")
		$("#game").find(":input").each(function(){
			switch(this.type){
				case "radio": this.checked = false;
			}
		})
		counter = 90;
		correctGuess = 0;
		incorrectGuess = 0;	
		timer();
		hideMe("#rules");
		hideMe("#newGameBtn");
		hideMe("#results");
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

	function endGame(){
		$("#result1").css("background-color", "green");
		$("#result2").css("background-color", "green");
		$("#result3").css("background-color", "green");
		$("#result4").css("background-color", "green");
		$("#result5").css("background-color", "green");
		$("#result6").css("background-color", "green");
		$("#result7").css("background-color", "green");
		$("#result8").css("background-color", "green");
		$("#result9").css("background-color", "green");
		$("#result10").css("background-color", "green");
		clearInterval(remaining);
		hideMe("#announcement");
		hideMe("#stopwatch");
		var a1 = "d";
		var a2 = "b";
		var a3 = "a";
		var a4 = "c";
		var a5 = "a";
		var a6 = "b";
		var a7 = "b";
		var a8 = "c";
		var a9 = "b";
		var a10 = "b";
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
			$("#result1").css("background-color", "red");
			alert("YOU ARE A JERK FOR SAYING THAT I SUCK!!!!!!!!!!!!!!");
			log("JERK!!! Wrong!"); 
		} else {
			incorrectGuess++;
			$("#result1").css("background-color", "red");
			log("You answered Question 1 incorrectly.")
		}

		if(guess2 === a2){
			correctGuess++;
			log("You answered Question 2 correctly.")
		}  else {
			incorrectGuess++;
			$("#result2").css("background-color", "red");
			log("You answered Question 2 incorrectly.")
		}

		if(guess3 === a3){
			correctGuess++;
			log("You answered Question 3 correctly.")
		} else {
			incorrectGuess++;
			$("#result3").css("background-color", "red");
			log("You answered Question 3 incorrectly.")
		}

		if(guess4 === a4){
			correctGuess++;
			log("You answered Question 4 correctly.")
		} else {
			incorrectGuess++;
			$("#result4").css("background-color", "red");
			log("You answered Question 4 incorrectly.")
		}

		if(guess5 === a5){
			correctGuess++;
			log("You answered Question 5 correctly.")
		} else {
			incorrectGuess++;
			$("#result5").css("background-color", "red");
			log("You answered Question 5 incorrectly.")
		}

		if(guess6 === a6){
			correctGuess++;
			log("You answered Question 6 correctly.")
		} else {
			incorrectGuess++;
			$("#result6").css("background-color", "red");
			log("You answered Question 6 incorrectly.")
		}

		if(guess7 === a7){
			correctGuess++;
			log("You answered Question 7 correctly.")
		} else {
			incorrectGuess++;
			$("#result7").css("background-color", "red");
			log("You answered Question 7 incorrectly.")
		}

		if(guess8 === a8){
			correctGuess++;
			log("You answered Question 8 correctly.")
		} else {
			incorrectGuess++;
			$("#result8").css("background-color", "red");
			log("You answered Question 8 incorrectly.")
		}

		if(guess9 === a9){
			correctGuess++;
			log("You answered Question 9 correctly.")
		} else {
			incorrectGuess++;
			$("#result9").css("background-color", "red");
			log("You answered Question 9 incorrectly.")
		}

		if(guess10 === a10){
			correctGuess++;
			log("You answered Question 10 correctly.")
		} else {
			incorrectGuess++;
			$("#result10").css("background-color", "red");
			log("You answered Question 10 incorrectly.")
		}

		$("#correct").text(correctGuess);


		hideMe("#game");
		showMe("#results");
	}

	/////////////////////////////////////////////////
	// Events
	/////////////////////////////////////////////////
	
	$("#newGameBtn").click(function(){
		startGame();
	})// End New Game Query

	$("#finishGameBtn").click(function(){
		endGame();
		// clearInterval(remaining);
		// hideMe("#announcement");
		// var a1 = "d";
		// var a2 = "b";
		// var a3 = "a";
		// var a4 = "c";
		// var a5 = "a";
		// var a6 = "b";
		// var a7 = "b";
		// var a8 = "c";
		// var a9 = "b";
		// var a10 = "b";
		// var guess1 = $("input[name='q1']:checked").val();
		// var guess2 = $("input[name='q2']:checked").val();
		// var guess3 = $("input[name='q3']:checked").val();
		// var guess4 = $("input[name='q4']:checked").val();
		// var guess5 = $("input[name='q5']:checked").val();
		// var guess6 = $("input[name='q6']:checked").val();
		// var guess7 = $("input[name='q7']:checked").val();
		// var guess8 = $("input[name='q8']:checked").val();
		// var guess9 = $("input[name='q9']:checked").val();
		// var guess10 = $("input[name='q10']:checked").val();
		// log(guess1);
		// log(guess2);
		// log(guess3);
		// log(guess4);
		// log(guess5);
		// log(guess6);
		// log(guess7);
		// log(guess8);
		// log(guess9);
		// log(guess10);

		// if(guess1 === a1){
		// 	correctGuess++;
		// 	log("You answered Question 1 correctly.")
		// } else if(guess1 === "a"){
		// 	incorrectGuess++;
		// 	alert("YOU ARE A JERK FOR SAYING THAT I SUCK!!!!!!!!!!!!!!");
		// 	log("JERK!!! Wrong!"); 
		// } else {
		// 	incorrectGuess++;
		// 	log("You answered Question 1 incorrectly.")
		// }

		// if(guess2 === a2){
		// 	correctGuess++;
		// 	log("You answered Question 2 correctly.")
		// }  else {
		// 	incorrectGuess++;
		// 	log("You answered Question 2 incorrectly.")
		// }

		// if(guess3 === a3){
		// 	correctGuess++;
		// 	log("You answered Question 3 correctly.")
		// } else {
		// 	incorrectGuess++;
		// 	log("You answered Question 3 incorrectly.")
		// }

		// if(guess4 === a4){
		// 	correctGuess++;
		// 	log("You answered Question 4 correctly.")
		// } else {
		// 	incorrectGuess++;
		// 	log("You answered Question 4 incorrectly.")
		// }

		// if(guess5 === a5){
		// 	correctGuess++;
		// 	log("You answered Question 5 correctly.")
		// } else {
		// 	incorrectGuess++;
		// 	log("You answered Question 5 incorrectly.")
		// }

		// if(guess6 === a6){
		// 	correctGuess++;
		// 	log("You answered Question 6 correctly.")
		// } else {
		// 	incorrectGuess++;
		// 	log("You answered Question 6 incorrectly.")
		// }

		// if(guess7 === a7){
		// 	correctGuess++;
		// 	log("You answered Question 7 correctly.")
		// } else {
		// 	incorrectGuess++;
		// 	log("You answered Question 7 incorrectly.")
		// }

		// if(guess8 === a8){
		// 	correctGuess++;
		// 	log("You answered Question 8 correctly.")
		// } else {
		// 	incorrectGuess++;
		// 	log("You answered Question 8 incorrectly.")
		// }

		// if(guess9 === a9){
		// 	correctGuess++;
		// 	log("You answered Question 9 correctly.")
		// } else {
		// 	incorrectGuess++;
		// 	log("You answered Question 9 incorrectly.")
		// }

		// if(guess10 === a10){
		// 	correctGuess++;
		// 	log("You answered Question 10 correctly.")
		// } else {
		// 	incorrectGuess++;
		// 	log("You answered Question 10 incorrectly.")
		// }

		// $("#correct").text(correctGuess);


		// hideMe("#game");
		// showMe("#results");
	})// End Finish Game Query

	$("#resetGameBtn").click(function(){
		startGame();
	})// End Reset Game Query

	$("#stopGameBtn").click(function(){
		stopGame();
	})// End Stop Game Query
	
});//End Document Ready Query