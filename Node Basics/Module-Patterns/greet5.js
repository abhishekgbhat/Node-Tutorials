// revealing module pattern 
var greeting = 'Hello world!!!!';

function greet() {
	console.log(greeting);
}
// only function is accessible externally and not the variable.
module.exports = {
	greet: greet
}