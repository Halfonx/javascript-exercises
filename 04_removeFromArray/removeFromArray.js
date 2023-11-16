const removeFromArray = function(array, argument) {
    const filteredArray = array.filter(function (number) {
        return number !== argument;
    });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
