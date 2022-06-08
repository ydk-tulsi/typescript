type combine = number | string
type AddFun = (n1:number,n2:number) => number;
type Add1Fun = (n1:combine,n2:combine) => combine;

function add(n1:number,n2:number) : number{
    return n1 + n2;
}

function combine(str1:string , str2:string):string{
    return `${str1} ${str2}`;
}

// function newAdd(num1:number,num2:number):undefined{
//     console.log(num1+num2);
//     return;
// }

function newAdd(num1:number,num2:number):void{
    console.log(num1+num2);
}
console.log(newAdd(2,5));

function printValue(num:number){
    console.log(`The value is ${num}`);
}

let add2 : AddFun = add;

let result = add2(2,2);
console.log(result);

function sub(n1:number,n2:number):number{
    return n1 - n2;
}

function mul(n1:number,n2:number):number{
    return n1 * n2;
}

function calculate(num1:number, num2:number, cb: AddFun){
    return cb(num1, num2)
}
console.log(calculate(10,10 ,add));
console.log(calculate(10,10 ,sub));
console.log(calculate(10,10 ,mul));

//.......... Unknown Type ............//

let userInput : unknown;
//let userInput : any;// 


userInput = "Hello Typescript";
userInput = 123;
userInput = true;

let userName : string;

if(typeof userInput === 'string'){
    userName = userInput;
}