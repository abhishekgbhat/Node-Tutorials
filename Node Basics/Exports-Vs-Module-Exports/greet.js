exports = function() {
	console.log('Hello');
}
// export is a reference to the module.exports.
console.log(exports);
// but only module.exports returns, export does not until mutated.
console.log(module.exports);