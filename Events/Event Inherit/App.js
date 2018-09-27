var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'Hello world!';
}

//Inheriting the EventEmitter to Greetr.
// All properties of EventEmitter can be used in Greetr.
util.inherits(Greetr, EventEmitter);

//Add a new greet property for Greetr.
Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');