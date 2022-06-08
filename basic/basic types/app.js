var cl = console.log;
cl('Hello');
function add(n1, n2, showResult, phrase) {
    if (showResult === true) {
        cl(phrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 20;
var num2 = 500;
var printResult = true;
var text = "The result is";
add(500, 20, true, "The result is"); //result is 520   
add(num1, num2, printResult, text); //result is 520  
// Type inference
//if  we declare  a property and assign value to it, typescript will assign  datatype to 
//than proprty  and this is called  as type inference. 
var x = 20;
var y;
y = 20;
