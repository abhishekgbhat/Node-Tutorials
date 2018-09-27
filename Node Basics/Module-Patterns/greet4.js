// constructor function
function Greetr() {
	this.greeting = 'Hello world!!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}
// sending the constructor
module.exports = Greetr;