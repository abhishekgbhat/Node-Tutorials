var obj = {
  name: 'John Doe',
  greet: function () {
    console.log(`Hello ${this.name}`)
  }
}

obj.greet()
obj.name = 'Abhishek'
// The call method overrides the name property of the object.
obj.greet.call({ name: 'Jane Doe' })
// The apply method does the same.
obj.greet.apply({ name: 'Jane Doe' })

obj.greet()

// The only difference would be when a function has a parameter involved
// obj.greet.call({ name: 'Jane Doe'}, param, param , param); comma seperated list
// obj.greet.apply({ name: 'Jane Doe'}, [param, param , param]); array of parameters
