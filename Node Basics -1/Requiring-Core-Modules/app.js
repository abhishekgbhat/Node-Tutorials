var util = require('util');

var name = 'Tony';
// formats code
var greeting = util.format('Hello, %s', name);
// prints with time stamp
util.log(greeting);