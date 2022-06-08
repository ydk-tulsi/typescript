function add(n1, n2) {
    return n1 + n2;
}
function combine(str1, str2) {
    return "".concat(str1, " ").concat(str2);
}
// function newAdd(num1:number,num2:number):undefined{
//     console.log(num1+num2);
//     return;
// }
function newAdd(num1, num2) {
    console.log(num1 + num2);
}
console.log(newAdd(2, 5));
function printValue(num) {
    console.log("The value is ".concat(num));
}
var add2 = add;
var result = add2(2, 2);
console.log(result);
function sub(n1, n2) {
    return n1 - n2;
}
function mul(n1, n2) {
    return n1 * n2;
}
function calculate(num1, num2, cb) {
    return cb(num1, num2);
}
console.log(calculate(10, 10, add));
console.log(calculate(10, 10, sub));
console.log(calculate(10, 10, mul));
//.......... Unknown Type ............//
var userInput;
//let userInput : any;// 
userInput = "Hello Typescript";
userInput = 123;
userInput = true;
var userName;
if (typeof userInput === 'string') {
    userName = userInput;
}
