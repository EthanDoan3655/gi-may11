// VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. If that 
// amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
// and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

//param number of coins, amount of coins
//has to return the amount number or returns -1
//number coin cannot be greater than output ex: array[5] cannot equal 3 output 
//

var coinChange = function(Coins, amount) {
    const table= new Array(amount + 1).fill(Infinity); //the +1 is to account for the zero index
    table[0] = 0;

    for(let coin of coins) {
        for(let i = 0; i < table.length; i++) {
            if(coin <= i) {
                let idx= i -coin;
                let potentialAmt = table[idx] + 1;
                table[i] = Math.min(potentialAmt, table[i]);
            }
        }

    }

    return table[table.length - 1] === Infinty ? -1 : table[table.length -1];
};
