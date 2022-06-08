let cl = console.log;

const num1 = document.getElementById('num1')! as HTMLInputElement;
const num2 = document.getElementById('num2')! as HTMLInputElement;
const btn = document.getElementById('btn');

function add(n1:number,n2:number){
    if(typeof n1=== 'number' && typeof n2=== 'number'){
        return n1 + n2
    }else{
        throw new Error('Invalid Input')
    }
}

btn.addEventListener("click" , ()=>{
    cl(add(parseInt (num1.value), Number(num2.value)));
})

var x = 10;
cl(typeof x);

var canDrive:boolean = false;
 

let anyValue : any = 500;
cl(typeof anyValue);

anyValue = true;
cl(typeof anyValue);

anyValue:{fname:string, lname:string}= {
    fname : "tulsi",
    lname : "katre"
}
cl(typeof anyValue);