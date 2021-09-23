const str = [1, 2, 3, 4];
const removeFromArray = function(i) {
const strLocation = str.indexOf(i);
const newStr = str.splice(strLocation, " ");
console.log(newStr);
};
removeFromArray(2);

module.exports = removeFromArray;
