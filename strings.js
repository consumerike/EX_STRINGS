var man = document.getElementById('manipulation');
man.addEventListener("click", handleClick);
man.addEventListener("keyup", handleEnter);


function handleClick (event) {
	var testString = document.getElementById('letters').value;
	if (event.target.name === "run") {
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	}

}

function handleEnter (event) {
	var testString = document.getElementById('letters').value;
	if (event.keyCode === 13) {
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	}

}



function reversal(x) {
	var result = x.split('').reverse().join('');

	var output = document.getElementById('output');

	output.innerHTML += `Reversal: ${result}`;
	return result;

}


function alphabits(x) {

	var result = x.split('').sort().join('');

	var output = document.getElementById('output');
	console.log(result);

	// output.innerHTML += `Alphabits: ${result}`;

}

function palindrome(x) {

	if (x === reversal(x)) {

		output.innerHTML += `Your string is a palindrome`;
	}

}

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

// document.writeln(exp1,exp2,exp3,...)

