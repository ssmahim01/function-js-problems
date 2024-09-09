// Problem 3

// Delete invalid numbers and show only numbers.

function deleteInvalids(array){
    if(!Array.isArray(array)){
        return 'Invalid Array';
    }
    
    let numberArray = [];
    for(const element of array){
        if(typeof element === 'number' && isNaN(element) === false){
            numberArray.push(element);
        }
    }

    return numberArray;
}

const checkResult = deleteInvalids([1, null, undefined, 18, -19, NaN, '12', [1, 2], {ob: 'lala'}]);
console.log(checkResult); // Output => [1, 18, -19]

const checkResult2 = deleteInvalids(["1", {num: 2}, NaN]);
console.log(checkResult2); // Output => []

const checkResult3 = deleteInvalids([1, 2, -3]);
console.log(checkResult3); // Output => [1, 2, -3]

const checkResult4 = deleteInvalids({num: [1, 2, 3]});
console.log(checkResult4); // Output => Invalid Array