class Book {
  constructor(author) {
    this._author = author
  }

  // getter
  get writer() {
    return this._author
  }

  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor
  }
}

const book = new Book("Edward Gonzalez")
let author = book.writer

console.log(author)
book.author = "Eddy Gonzalez"

author = book.author
console.log(author)

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32)
    }

    get temperature() {
      return this._temp
    }

    set temperature(updatedTemp) {
      return this._temp = updatedTemp
    }
  }

  return Thermostat
}

const Thermostat = makeClass()
const thermos = new Thermostat(76)

let temp = thermos.temperature

thermos.temperature = 26
temp = thermos.temperature

console.log(temp)