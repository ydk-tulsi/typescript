var cl = console.log;
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.getElementById('btn');
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        throw new Error('Invalid Input');
    }
}
btn.addEventListener("click", function () {
    cl(add(parseInt(num1.value), Number(num2.value)));
});
var x = 10;
cl(typeof x);
var canDrive = false;
var anyValue = 500;
cl(typeof anyValue);
anyValue = true;
cl(typeof anyValue);
anyValue: {
    fname: string, lname;
    string;
}
{
    fname: "tulsi",
        lname;
    "katre";
}
cl(typeof anyValue);
