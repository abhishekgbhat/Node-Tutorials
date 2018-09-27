function Emitter () {
  this.events = {}
}

Emitter.prototype.on = function (type, listener) {
  // Line of code below checks if the property
  // already exists else create an empty array
  console.log('1 ' + this.events[type])
  this.events[type] = this.events[type] || []
  console.log('2 ' + this.events[type])
  this.events[type].push(listener)
  console.log('3 ' + type + ': ' + this.events[type])
}

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {
      listener()
    })
  } else {
    console.log('No event ' + type + ' found :-(')
  }
}

module.exports = Emitter
