/* "This" is another problem

link to the kata : https://www.codewars.com/kata/this-is-an-other-problem/train/javascript

Problem description: 

You need to create a function NamedOne taking two parameters (firstname and lastname) and returning the fullName (firstName + space + lastName),
If the fullName is modified, the firstnName and lastName properties should be modified accordingly. If the firstName and lastName are modified,
fullName property should be modified accordingly. 

Solution:

all you need to do is make a getter and a setter for the fullName property, setter modifies firstName and lastName, getter returns current
firstName and lastName. Implementation: */

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  Object.defineProperty(this, "fullName", {
    set: function(args) {
      args = args.split(" ");
      if (args.length === 2) {
        this.firstName = args[0]
        this.lastName = args[1];
      }
    }, 
    get: function(){
      return this.firstName + " " + this.lastName
    }
  })
}

let person = new NamedOne('John', 'Doe');
console.log(person.fullName) // 'John Doe'
person.firstName = 'Bill';
person.lastName = 'Gates';
console.log(person.fullName) // 'Bill Gates'
person.fullName = "Tom Cruise";
console.log(person.firstName) // 'Tom'
console.log(person.lastName) // 'Cruise'
