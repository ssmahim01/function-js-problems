// Problem 1

// Calculate the money has a ticket seller after get and cost.

function calculateMoney(ticketSale){
    if(ticketSale < 0 || typeof ticketSale !== 'number'){
        return 'Invalid Number';
    }
    const getCostMoney = ticketSale * 120 - (500 + 8 * 50);
    return getCostMoney;
}

const totalMoney = calculateMoney(10); // Output => 300
console.log(totalMoney);

const totalMoney2 = calculateMoney(1055); // Output => 125700
console.log(totalMoney2);

const totalMoney3 = calculateMoney(93); // Output => 10260
console.log(totalMoney3);

const totalMoney4 = calculateMoney(-130); // Output => Invalid Number
console.log(totalMoney4);