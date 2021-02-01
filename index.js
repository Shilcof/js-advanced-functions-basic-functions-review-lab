// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

// defines mondayWork function expression as specified
//     1) function exists
//     2) uses the default activity 'go to the office' when no arguments are passed
//     3) permits the default activity to be overriden
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// defines wrapAdjective function according to the specification
//     4) function exists
//     5) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
//     6) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
function wrapAdjective(wrapper = "*") {
    return function (param = "special") {
        return `You are ${wrapper + param + wrapper}!`;
    }
};

// defines an object called Calculator
//     7) has a JavaScript Object called Calculator as a local variable
//     that has a function called add
//     8) Calculator.add exists
//     9) calculates 1 + 3
//     that has a function called subtract
//     10) Calculator.subtract exists
//     11) calculates 1 - 3
//     that has a function called multiply
//     12) Calculator.multiply exists
//     13) calculates 1 * 3
//     that has a function called divide
//     14) Calculator.divide exists
//     15) calculates 10 / 5
const Calculator = {};
Calculator["add"] = (a,b) => a+b;
Calculator["subtract"] = (a,b) => a-b;
Calculator["multiply"] = (a,b) => a*b;
Calculator["divide"] = (a,b) => a/b;


// Defines a function called actionApplyer
//     16) exists
//     receives two arguments: a starting integer and an array of functions
//     17) returns the given starting point, unchanged, when the array is empty
//     18) Given 13, returns 4 after being acted on by several functions
function actionApplyer(init, operations) {
    return operations.reduce((current, operation) => operation(current), init);
}