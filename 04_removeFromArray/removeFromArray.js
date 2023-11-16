const removeFromArray = function(array, ...args) {
    const newArray = [];
    let arrayMaxIndex = array.length - 1;

    for (let i = 0; i <= arrayMaxIndex; i++) {
        if (array[i] != args) {
            newArray.push(array[i]);
        };
    } return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

/*
Cette fonction reçoit plusieurs arguments, en premier un tableau suivi d'un ou plusieurs nombre
La fonction doit retourner un tableau identique à celui fourni sans les nombres indiqués en argument

On parcours le tableau
Si on tombe sur une valeur identique à l'un des arguments
On enlève 
*/