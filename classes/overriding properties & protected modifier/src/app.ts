//overriding properties

class Department{
    //public name : string;
    private employees: string[] =[];
    constructor(public name:string, private id: string){
        //this.name = name;
        //this.id = id;
    };
    public describe(){
        console.log(`Department is ${this.id} : ${this.name}`)
    }
    public addEmp(emp:string){
        this.employees.push(emp);
    }
    public printNoOfEmp(){
        console.log(`${this.employees.length}`)
    }
}

let accounting = new Department("Accounting","1");
console.log(accounting);

accounting.addEmp("Tulsi");
accounting.addEmp("katre");
console.log(accounting);
accounting.describe();

accounting.printNoOfEmp();
//accounting.employees[2] = "I am Tulsi";
//private properties are  only available in class
console.log(accounting);
