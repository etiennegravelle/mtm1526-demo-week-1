// JavaScript Document

alert('this is an alert!'); //this pops up an alert with an ok button

var name;

while(!name) {
	name = prompt('what is your name?');
}

//'console.log()' writes out the content of a variable for debugging
//identical to Actionscript's 'trace()'

console.log(name);

document.write('Hello, ' + name);

for (var i = 0; i < 5; i++) {
	document.write('<br>' + i);
	document.write('<h1>' + i + '</h1>');
}

function isNameCool () {
	var name = prompt('What is your name?')
		
	if (name == 'Etienne') {
		document.write('that is an awesome name!');
	}else{
		document.write("I don't like your name!");
	}
}

isNameCool();

var writeNameMultipleTimes = function () {
	for(var i = 0; i < 5; i++ ) {
		document.write('<strong>Etienne</strong><br>');
	}
	
};

writeNameMultipleTimes();
			