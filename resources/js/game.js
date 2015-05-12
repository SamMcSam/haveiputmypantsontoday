$(function() {
	
	//init
	$('#answerYes').hide();
	$('#answerNo').hide();

	//buttons	
	$('#yesbutton').click(function(){
		answerQuestion(true);
	});
	$('#nobutton').click(function(){
		answerQuestion(false);
	});

});

function answerQuestion(answer){
	//loads random yes/no answer
	//...

	if (answer)
		$('#answerYes').show();
	else
		$('#answerNo').show();
	
	$('#part1').hide();
	$('#part2').fadeIn();
}