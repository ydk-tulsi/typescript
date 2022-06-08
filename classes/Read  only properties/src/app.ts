// Read only properties

class Department{
    //public name : string;
    //private id : string;
    private employees: string[] =[];
    constructor(public name:string, private readonly id: string){
        //this.name = name;
        //this.id = id;
    };
    public describe(){
        console.log(`Department is ${this.id} : ${this.name}`)
    }
    public addEmp(emp:string){
        this.id ="New id 2";
        this.employees.push(emp);
    }
    public printNoOfEmp(){
        console.log(`${this.employees.length}`)
    }
}

let accounting = new Department("Accounting","1");//here id get initialized
console.log(accounting);

accounting.addEmp("Tulsi");
accounting.addEmp("katre");
accounting.addEmp("tulsi");
console.log(accounting);

