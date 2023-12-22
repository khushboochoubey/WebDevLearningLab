// const square = {
//     area : (a) => (a*a),
//     perimeter : (a) => (4*a)
// }

// (function(exports,require,module,__filename,__dirname)){
    
// }

const square = require('./square.js');

const calsquare = (a) =>{

    console.log(`the value of a is ${a} and the area ` + square.area(a));
    console.log(`the value of a is ${a} and the perimeter ` + square.perimeter(a));

}

console.log(__filename);
console.log(__dirname);

calsquare(5);