var fs = require('fs');
// console.log(fs);
console.log(fs.readFileSync('lesson three.txt').toString().split('\n').length);