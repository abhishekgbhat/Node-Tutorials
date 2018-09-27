// a normal function call
function greet() {
    console.log('Hi');
}
greet();

// first class function passing a funtion to a function.
function logGreeting(fn) {
    fn();
}
// Observe :  no paranthesis are added.
logGreeting(greet);

// function expression
var greetMe = function () {
    console.log('Hi All');
}
// call it directly
greetMe();

// call it through first class
logGreeting(greetMe);

