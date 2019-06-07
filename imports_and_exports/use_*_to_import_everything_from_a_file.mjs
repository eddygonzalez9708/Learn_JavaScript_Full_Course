// This script cannot be executed using node (ES6 imports in node are not supported) or will it run if the file is accessed via a browser.
// To run this file node --experimental-modules name_of_file.mjs

import * as capitalizeStrings from "./use_export_to_reuse_a_code_block"

console.log(capitalizeStrings.capitalizeString("edward"))
console.log(capitalizeStrings.bar)
console.log(capitalizeStrings.foo)