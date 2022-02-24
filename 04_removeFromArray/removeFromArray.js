const removeFromArray = function(arr, num) {
    let pos = arr.indexOf(num);
    arr.splice(pos,1)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
