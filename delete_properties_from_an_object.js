// Example

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything"],
  "bark": "bow-wow"
}

delete ourDog.bark

// Setup

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
}

delete myDog.tails

console.log(myDog.tails)