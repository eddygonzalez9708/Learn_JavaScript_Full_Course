function freezeObj() {
  "use strict"

  const MATH_CONSTANTS = {
    PI: 3.14
  }

  Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99
  } catch(err) {
    console.log(err)
  }

  return MATH_CONSTANTS.PI
}

console.log(freezeObj())