var answers;
var quotes;

$(function() {

	//init
	$.getJSON("resources/data/answers.json", function(json) {
	    answers = json; 
	});

	$.getJSON("resources/data/batman.json", function(json) {
	    quotes = json; 
	});

	startUp();

	//buttons	
	$('#yesbutton').click(function(){
		answerQuestion(true);
	});
	$('#nobutton').click(function(){
		answerQuestion(false);
	});
	$('#repeatbutton').click(function(){
		startUp();
	});

});

//set state of game	
function startUp() {
	$('#yesPicture').hide();
	$('#noPicture').hide();

	$('#answer').hide();
	$('#part2').hide();
	$('#part1').fadeIn();
}

function answerQuestion(answer) {
	var textAnswer;

	//loads random yes/no answer
	if (answer){
		textAnswer = answers["yes"][Math.floor(Math.random() * answers["yes"].length)];
		$('#yesPicture').show();
	}
	else{
		textAnswer = answers["no"][Math.floor(Math.random() * answers["no"].length)];
		$('#noPicture').show();
	}
	$('#answerTxt').text(textAnswer);

	$('#answer').show();
	$('#part1').hide();
	$('#part2').fadeIn();

	pickQuote();
}

function pickQuote() {
	$('#backquote').text("Holy " + quotes["holy"][Math.floor(Math.random() * quotes["holy"].length)] + ", Batman!");
}