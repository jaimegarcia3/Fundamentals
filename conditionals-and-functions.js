/*
 * Conditionals, Functions, Scopes and Loops.
 */

/* Equals
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than
let greaterThanEq = 5 >= 5;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

//compareStorePrices(10, 5);
//compareStorePrices(7, 10);

function squareNum (number) {
    return number * number;
}

let squareNumber = squareNum(4);
console.log(squareNumber);

/*...*/
/*...*/
/*...*/
/*
let x = 10;

function addNumbers (n, m){
    console.log(x);
    let b;
    if (1===1) {
        let b = 8
    }
    console.log(b);
    return n + m;
}

addNumbers(1,2,10)
*/
/*...*/
/*...*/
/*...*/
/*...*/

/*                        0  1  2  3  4
let outArray = [1, 2 ,3 ,4, 5, 1, 7];

let arrLen = outArray.length;
for (let i = 0; i<arrLen; i++) {
//    console.log("i is equal to: " + i);
    console.log(outArray [i] );
    for (let j = 0; j<10; j++) {
        console.log('j is equal to: ' + j)
    }
}
*/
/*...*/

let x = 0;
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}