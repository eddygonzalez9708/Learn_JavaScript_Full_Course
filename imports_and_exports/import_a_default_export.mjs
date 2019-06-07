// This script cannot be executed using node (ES6 imports in node are not supported) or will it run if the file is accessed via a browser.
// To run this file node --experimental-modules name_of_file.mjs

import subtract from './create_an_export_fallback_with_export_default'

console.log(subtract(7, 4))