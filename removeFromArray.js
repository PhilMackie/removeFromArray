const str = [1, 2, 3, 4];
const i = 3; 
const valueTwo = 2;
/// write more than one function , one to chekc and one to remove
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

const removeFromArray = function() {
//find indexOf
const index = str.indexOf(i);
console.log(index);
//splice it at indexOf
    str.splice(index, 1);
    console.log(str);
    return str;
};

// Do not edit below this line
module.exports = removeFromArray;
