/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
// Extra arguments are ignored

// Function using ...rest
const sumAll2 = (a, b, c, ...rest) => {
    let sum = a + b + c; 
    for (let i of rest) {
        sum += i;
    }
    return sum;
}
let sumAll3 = sumAll2(1,2,3,4,5,6);
console.log(sumAll3)