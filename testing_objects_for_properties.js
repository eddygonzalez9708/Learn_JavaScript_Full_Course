// Setup 

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
}

function checkObj(checkProp) {
  // Your code here

  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]
  } else {
    return "Not Found"
  }
}

// Test your code by modifying these values

console.log(checkObj("hello"))