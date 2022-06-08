// ........Type aliase custom type...........//
function combine(num1, num2, resultConversion) {
    var result;
    if ((typeof num1 === 'number' && typeof num2 === 'number') || resultConversion === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var com1 = combine(10, 20, "as-number");
console.log(com1, typeof com1);
var com2 = combine("10", "20", "as-number");
console.log(com2, typeof com2);
var com3 = combine("Tulsi", "Katre", "as-string");
console.log(com3, typeof com3);
var x = 5;
var greet = "Hello There";
var product1 = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: string,
        description: string
    }
};
var product2 = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
var products = [product1, product2];
