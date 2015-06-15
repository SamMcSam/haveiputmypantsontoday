var answers;
var quotes;

const COOKIEPANTS = "pants"
const COOKIEPANTS_DATE = "pants_date" //workaround to save expiry date

$(function() {

	//init
	$.getJSON("resources/data/answers.json", function(json) {
	    answers = json; 
	});

	$.getJSON("resources/data/batman.json", function(json) {
	    quotes = json; 
	});

	//set state of game
	if (Cookies.get(COOKIEPANTS)) {
		//come back later
	}
	else {
		//sets up normal game!
		$('#answer').hide();
		$('#part2').hide();
		$('#yesPicture').hide();
		$('#noPicture').hide();
		$('#part1').fadeIn();

		//buttons	
		$('#yesbutton').click(function(){
			answerQuestion(true);
		});
		$('#nobutton').click(function(){
			answerQuestion(false);
		});
	}

});

function setCookie(haveIputPants) {
	var today = new Date();
	var tomorrow = new Date();
	tomorrow.setDate(today.getDate()+1);
	tomorrow.setUTCHours("22");
	tomorrow.setUTCMinutes("0");
	tomorrow.setUTCSeconds("0");
	Cookies.set( COOKIEPANTS , 'haveIputPants', { expires: tomorrow });
	Cookies.set( COOKIEPANTS_DATE , tomorrow.toString(), { expires: tomorrow });
}

function answerQuestion(answer){
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


	setCookie(answer);

	pickQuote();
	$('#timeDiff').text(getTimeBefore());
}

function pickQuote(){
	$('#backquote').text("Holy " + quotes["holy"][Math.floor(Math.random() * quotes["holy"].length)] + ", Batman!");
}

function getTimeBefore(){
	var today = new Date();
	var then = new Date( Cookies.get(COOKIEPANTS_DATE) );

	var diff = Math.floor((then - today)/1000);
	var sec = diff % 60;
	diff = Math.floor(diff/60);
	var min = diff % 60;
	diff = Math.floor(diff/60);
	var hour = diff % 60;

	return hour + ":" + min + ":" + sec;
}