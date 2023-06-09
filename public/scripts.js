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

        let game = $('input[type=radio][name=game]:checked').val();
        let isOpponent = document.querySelector('#opponent').checked;
        let shot = $('input[type=radio][name=shot]:checked').val();
        let baseurl = window.location.href + 'app/'
        let url = baseurl + game + '/play'

	if(isOpponent){
		url += '/' + shot
	}

	let response = await fetch(url)
	let result = await response.json()

	if(isOpponent) {
		$('#results').show();
		document.getElementById("results").innerText = 'You: ' + result.player + '\n\nYour opponent: ' + result.opponent + '\n\nResult: you ' + result.result.toUpperCase();
	} else{
		$('#results').show();
		document.getElementById("results").innerText = result.player;
	}
}

function viewRules(){
	document.getElementById("rules").innerText = 
    `Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors

    Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`;
	
	document.getElementById("rules").hidden = false;
	document.getElementById("hide-rules-button").hidden = false;
	document.getElementById("rules-button").hidden = true;
}

function hideRules(){
	document.getElementById("rules").hidden = true;
    	document.getElementById("hide-rules-button").hidden = true;
    	document.getElementById("rules-button").hidden = false;
}
