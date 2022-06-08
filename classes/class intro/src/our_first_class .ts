class Department{
    name : string;
    constructor(n:string){
        this.name = n;
    };
    describe(){
        console.log(`Department is ${this.name}`)
    }
}

let acconting = new Department("Acconting");
console.log(acconting);
console.log(acconting.name);

acconting.describe();

let  newAccounting = {name:"Testing",describe : acconting.describe};

newAccounting.describe(); //newAccounting.name>>undefined
