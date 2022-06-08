// ........Type aliase custom type...........//

type combinable = number|string;
type conversionDescriptor = "as-number" | "as-string";

function combine(num1:combinable, num2:combinable, resultConversion:conversionDescriptor){
    let result
    if((typeof num1 === 'number' && typeof num2 === 'number')|| resultConversion === "as-number" ){
        result = +num1 + +num2;
    }
    else{
        result = num1.toString() + num2.toString()
    }
    return result;
}

let com1 = combine(10,20,"as-number");
console.log(com1,typeof com1);

let  com2 = combine("10","20","as-number");
console.log(com2, typeof com2);

let  com3 = combine("Tulsi","Katre","as-string");
console.log(com3, typeof com3);

const x = 5;
const greet = "Hello There";

type product={
    id :string,
    price : number,
    tags : string[];
    details: {
        title: string,
        description:string,
    }

}

 const product1:product= {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: string,
      description: string
    }
  } 
  const product2:product= {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  } 

  let products: Product[] =[product1,product2];