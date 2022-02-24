const reverseString = function(str) {
    let splt = str.split('');
    let rev = [];
    for(let i = splt.length-1; i >= 0; i--){
        rev.push(splt[i]);
    }
    return rev.join('');
};

// Do not edit below this line
module.exports = reverseString;
