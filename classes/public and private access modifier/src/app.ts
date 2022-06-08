//private and public access modifier

class Department{
    public name : string;
    private employees: string[] =[];
    constructor(n:string){
        this.name = n;
    };
    describe(this:Department){
        console.log(`Department is ${this.name}`)
    }
    addEmp(emp:string){
        this.employees.push(emp);
    }
    printNoOfEmp(){
        console.log(`${this.employees.length}`)
    }
}

let accounting = new Department("Acconting");
console.log(accounting);

accounting.addEmp("Tulsi");
accounting.addEmp("katre");
console.log(accounting);

accounting.printNoOfEmp();
//accounting.employees[2] = "I am Tulsi";
//private properties are  only available in class
console.log(accounting);
