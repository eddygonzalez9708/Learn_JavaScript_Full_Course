// This script cannot be executed using node (ES6 imports in node are not supported) or will it run if the file is accessed via a browser.
// To run this file node --experimental-modules name_of_file.mjs

import { capitalizeString } from "./string_function.mjs"

const cap = capitalizeString("hello!")

console.log(cap)