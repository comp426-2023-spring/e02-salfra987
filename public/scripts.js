// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


function showHideShots(){
	let check = document.getElementById('opponent');
	let type = document.querySelector('input[name="game"]:checked').id;
	if(check.checked && type === 'rpsls'){
		$('.shots').show();
		$('.rpsls').show();
	} else if(check.checked && type === 'rps'){
		$('.shots.rps').show();
		$('.rpsls').hide();
	} else {
		$('.shots').hide();
	}
}

function resetGame(){
	document.getElementById('userinput').reset();
	$('#results').hide();
	$('#userinput').show();
	$('#play').show();
	showHideShots();
}

async function playGame(){
	$('#userinput').hide();
	$('#play').hide();
