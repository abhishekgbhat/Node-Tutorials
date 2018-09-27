// Note : we are not using slash as it is a internal call
var Emitter = require('events')
var eventConfig = require('./config').events

var emtr = new Emitter()

emtr.once(eventConfig.GREET, function () {
  console.log('Somewhere, someone said hello.')
})

emtr.once(eventConfig.GREET, function () {
  console.log('Hello Again')
})

emtr.on(eventConfig.SMILE, function () {
  console.log('I just smiled!')
})

console.log('Hello!')
emtr.emit(eventConfig.GREET)
emtr.emit(eventConfig.GREET)
emtr.emit(eventConfig.SMILE)
emtr.emit(eventConfig.ANGER)
console.log(emtr)
