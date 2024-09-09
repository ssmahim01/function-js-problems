// Problem 2

// Returns good name or bad name or invalid.

function checkName(name){
    if(typeof name !== 'string'){
        return 'invalid';
    }

    let lastLetter = name.slice(-1).toLowerCase();
    let result = false;
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

        for(let char of checkArray){
            if(char === lastLetter){
                result = true;
         }
    }
return result ? 'Good Name' : 'Bad Name';
}
const checkResult = checkName('Salman'); // Output => Bad Name
console.log(checkResult);

const checkResult2 = checkName('RAFEE'); // Output => Good Name
console.log(checkResult2);

const checkResult3 = checkName('Jhankar'); // Output => Bad Name
console.log(checkResult3);

const checkResult4 = checkName(199); // Output => invalid
console.log(checkResult4);

const checkResult5 = checkName(["Rashed"]); // Output => invalid
console.log(checkResult5);