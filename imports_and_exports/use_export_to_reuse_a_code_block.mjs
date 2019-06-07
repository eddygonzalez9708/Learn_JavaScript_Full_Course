// This script cannot be executed using node (ES6 imports in node are not supported) or will it run if the file is accessed via a browser.
// To run this file node --experimental-modules name_of_file.mjs

const capitalizeString = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export { capitalizeString }

export const foo = "bar"
export const bar = "foo"