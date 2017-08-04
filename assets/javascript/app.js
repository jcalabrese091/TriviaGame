$(document).ready(function(){

var answers= ["Wayne Gretzky","Gordie Howe","Mario Lemieux","Bobby Orr"];
var questions=["What hockey legend played for the RedWings and wore the number 9?", "What hockey legend wore #99?", "What player is now part owner of the team they retired with?", "Who scored the goal to close out the series in the 1970 stanley cup finals?"];
var solutions=["Gordie Howe","Wayne Gretzky","Mario Lemieux","Bobby Orr"];
var images=["assets/images/gordieHowe.gif","assets/images/wayneGretzky.jpg","assets/images/mario.jpg","assets/images/bobbyOrr.jpg"];
var quest1={
	question: questions[0], 
	answers: answers, 
	solution: solutions[0], 
	picture: images[0]
};
var quest2={question: questions[1], answers: answers, solution: solutions[1], picture: images[1]};
var quest3={question: questions[2], answers: answers, solution: solutions[2], picture: images[2]};
var quest4={question: questions[3], answers: answers, solution: solutions[3], picture: images[3]};
var questionArray=[quest1,quest2,quest3,quest4];
var theQuest= 0;
var espn = document.createElement("audio");
espn.setAttribute("src", "assets/images/espnNHL.mp3");
espn.play();

function startGame (){
		$("#questionLayout").empty();
		$("#answers").empty();
		var startButton= $("<button>Start</button>");
		$("#startPage").append(startButton);
		startButton.attr("class","startButton");
		startButton.on("click", function genFirst(){
		GenerateQuestion(questionArray[theQuest]);
		$("#startPage").empty(startButton);
	});
	
};
startGame();
	function GenerateQuestion(question){
		
		var questionDiv= $("<div>");
		questionDiv.attr("class","questionDesign");
		$("#questionLayout").append(questionDiv);
		questionDiv.html(question.question);	
	for(var i=0; i<question.answers.length; i++){
		function checkSolution(){
			
			var check = this.getAttribute("value");
			if (answers[check] == question.solution){
				$("#questionLayout").empty(questionDiv);
				$("#answers").empty(answerInfo);
				var heading=$("<h1>CORRECT</h1>");
				$("#questionLayout").append(heading);
				$("#questionLayout").html(heading);
				var imageDiv= $("<img>");
				$("#questionLayout").append(imageDiv);
				imageDiv.attr("src",images[theQuest]);
				// $(".image").src = images[i];
				// questionLayout.html(images[i]);
				$("#answers").html(question.solution);
				setTimeout(startGame, 6000);
				
			}
			else {
				
				$("#questionLayout").empty(questionDiv);
				$("#answers").empty(answerInfo);
				var heading=$("<h1>Wrong Answer</h1>");
				$("#questionLayout").append(heading);
				$("#questionLayout").html(heading);
				var imageDiv= $("<img>");
				$("#questionLayout").append(imageDiv);
				imageDiv.attr("src",images[theQuest]);
				// $(".image").src = images[i];
				// questionLayout.html(images[i]);
				$("#answers").html(question.solution);
				setTimeout(startGame, 6000);
			}
			theQuest++;
		};

		var answerInfo= $("<button>"+question.answers[i]+"</button>");
		answerInfo.attr("value",i);
		answerInfo.attr("class","buttonArt");
		$("#answers").append(answerInfo);
		answerInfo.html(question.answers[i]);
		answerInfo.on("click", checkSolution);
		
		};
		// $(":button").on("click", checkSolution());
	

	
	
};	
});

