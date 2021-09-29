const str = [1, 2, 3, 4];
const i = 3; 
const j = 2;


const removeFromArray = function() {

//for each element in str

//if string includes (i||j)
if (str.includes(i||j)){

    //find indexOf
const index = str.indexOf(i);
console.log(index);
//splice it at indexOf
    str.splice(index, 1);
    console.log(str);
    return str;
};
}


// Do not edit below this line
module.exports = removeFromArray;
