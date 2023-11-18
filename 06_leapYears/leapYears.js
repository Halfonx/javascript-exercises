const leapYears = function(year) {
    if (year % 400 == 0) {
        return true;
    } else if (year % 4 == 0 && !Number.isInteger(year / 100)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

/*
on me fournit un chiffre
pour être vrai, il doit être divisible par 4
mais les siècles doivent être vrai que si on peut les diviser par 400
*/