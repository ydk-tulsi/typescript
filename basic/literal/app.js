//literal type
//resultConversion:"as-number" | "as-string"
function combine(num1, num2, resultConversion) {
    var result;
    if ((typeof num1 === 'number' && typeof num2 === 'number') || resultConversion === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    // if(resultConversion === "as-number"){
    //     return +result;
    // }else{
    //     return result.toString();
    // }  
    return result;
}
var com1 = combine(10, 20, "as-number");
console.log(com1, typeof com1);
var com2 = combine("10", "20", "as-number");
console.log(com2, typeof com2);
var com3 = combine("10", "20", "as-string");
console.log(com3, typeof com3);
var x = 5;
var greet = "Hello There";
