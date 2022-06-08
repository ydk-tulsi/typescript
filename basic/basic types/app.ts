let cl = console.log;

cl('Hello');
function add(n1:number,n2:number,showResult:boolean,phrase:string){
    if(showResult === true){
        cl(phrase + n1 + n2)
    }else{
        return n1+n2
    }
   
}

let num1 = 20;
let num2  = 500;
let printResult = true;
let text = "The result is";

 add(500,20,true,"The result is");//result is 520   
 add(num1,num2,printResult,text);//result is 520  
 
 // Type inference
 //if  we declare  a property and assign value to it, typescript will assign  datatype to 
 //than proprty  and this is called  as type inference. 

 let x: number = 20;
 let y:number;
 y=20;
