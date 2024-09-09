// Problem 5

// Monthly savings of a freelancer.

function monthlySavings(arr, livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'invalid input';
    }

    let totalIncome = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 3000){
            let tax = arr[i] * 0.2;
            totalIncome += arr[i] - tax;
        }

            else{
                totalIncome += arr[i];
            }
        }
        const totalSavings = totalIncome - livingCost;
        if(totalSavings >= 0){
            return totalSavings;
        }
        else{
            return 'earn more';
        }
}

const savingsMoney = monthlySavings([1000, 2000, 3000], 5400);
console.log(savingsMoney); // Output => 0

const savingsMoney2 = monthlySavings([1000, 2000, 2500], 5000);
console.log(savingsMoney2); // Output => 500

const savingsMoney3 = monthlySavings([900, 2700, 3400], 10000);
console.log(savingsMoney3); // Output => earn more

const savingsMoney4 = monthlySavings(100, [900, 2700, 3400]);
console.log(savingsMoney4); // Output => invalid input