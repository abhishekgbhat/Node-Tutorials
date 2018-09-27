var person = {
  name: 'Abhishek',
  greet: function () {
    console.log(this.name)
  }
}

person.greet()

console.log(person['name'])
