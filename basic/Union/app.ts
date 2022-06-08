//........Union.........//

function combine(num1:number | string, num2:number | string){
    let result
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        result = num1 + num2;
    }else{
        result = num1.toString() + num2.toString()
    }
    return result;
}

let add1 = combine(20,40);
console.log(add1);

let com1 = combine("Hello" , "Ts");
console.log(com1);


