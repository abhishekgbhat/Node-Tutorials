// constructor function
function Greetr() {
	this.greeting = 'Hello world!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}
// sending a new object - ask me questions!!!!
module.exports = new Greetr();