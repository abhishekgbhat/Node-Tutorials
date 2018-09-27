var Emitter = require('./emitter')

var emtr = new Emitter()

emtr.on('sayHello', function () {
  console.log('Somewhere, someone said hello.')
})

emtr.on('greet', function () {
  console.log('A greeting occurred!')
})

emtr.on('greet', function () {
  console.log('A greeting occurred Second!')
})

console.log('Hello!')
emtr.emit('greet')
// emtr.emit('sayHello')
// emtr.emit('greet1')
// This shows the properties inside the object events
console.log(emtr)
