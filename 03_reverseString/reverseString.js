const reverseString = function(string) {
    let splitted = string.split('');
    let reversed = splitted.reverse();
    let joined = reversed.join('');
    return joined;
};

// Do not edit below this line
module.exports = reverseString;
