const removeFromArray = function(array, ...args) {
    const newArray = array.filter((element) => !args.includes(element)); // This function filters and stores all the element that are not in the args in a new array
    // args acts like an array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;