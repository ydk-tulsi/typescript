// getters & setters


class Department{
    
    //private employees: string[] =[];
    protected employees: string[] =[];
    constructor(public name:string, private readonly id: string){
        
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

class AccountDepartment extends Department{
    private lastReport : string;
    get  accessLastReport(){
        if(this.lastReport){
            return this.lastReport
        }else{
            throw new Error("No Report Available")
        }
    }
    set accessLastReport(val:string){
        if(!val){
            throw new Error("please provide valid Report")
        }else{
            this.lastReport = val;
        }
    }
    constructor(accountId:string, private financeReport : string[]){
        super("Accounting",accountId);
        this.lastReport = financeReport[0];
    }
    
    public addEmp(emp: string): void {
        if(emp === "Tulsi"){
            return
        }else{
            this.employees.push(emp)
           
        }
    }
    public addReport(report:string){
        this.financeReport.push(report);
        this.lastReport = report;
    }
    public printReport(){
        console.log(this.financeReport)
    }
}



let accounting = new AccountDepartment("1",[]);//here id get initialized
console.log(accounting);

accounting.addEmp("tulsi");
accounting.addEmp("Tulsi");
accounting.addReport("All form 16");
console.log(accounting);

console.log(accounting.accessLastReport);
accounting.accessLastReport = "TDS forms";
console.log(accounting.accessLastReport);

accounting.printReport();
accounting.printNoOfEmp();

class ITDepartment extends Department{
    constructor(itId:string,private serverNames:string[]){
        super("IT",itId)
    }
    public addServer(servrName:string){
        this.serverNames.push(servrName)
    }
    public printServer(){
        console.log(this.serverNames)
    }
}
let itDepartment = new ITDepartment("5",[]);
console.log(itDepartment);

itDepartment.addServer("server one");
itDepartment.printServer();
itDepartment.printNoOfEmp();

// protected modifier >> that property will  be available in parent class and  child class as well
// it will not be availbale on instance/object created by class





