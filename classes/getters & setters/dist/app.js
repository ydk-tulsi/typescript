"use strict";
// getters & setters
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        //private employees: string[] =[];
        this.employees = [];
    }
    ;
    describe() {
        console.log(`Department is ${this.id} : ${this.name}`);
    }
    addEmp(emp) {
        this.employees.push(emp);
    }
    printNoOfEmp() {
        console.log(`${this.employees.length}`);
    }
}
class AccountDepartment extends Department {
    constructor(accountId, financeReport) {
        super("Accounting", accountId);
        this.financeReport = financeReport;
        this.lastReport = financeReport[0];
    }
    get accessLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("No Report Available");
        }
    }
    set accessLastReport(val) {
        if (!val) {
            throw new Error("please provide valid Report");
        }
        else {
            this.lastReport = val;
        }
    }
    addEmp(emp) {
        if (emp === "Tulsi") {
            return;
        }
        else {
            this.employees.push(emp);
        }
    }
    addReport(report) {
        this.financeReport.push(report);
        this.lastReport = report;
    }
    printReport() {
        console.log(this.financeReport);
    }
}
let accounting = new AccountDepartment("1", []); //here id get initialized
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
class ITDepartment extends Department {
    constructor(itId, serverNames) {
        super("IT", itId);
        this.serverNames = serverNames;
    }
    addServer(servrName) {
        this.serverNames.push(servrName);
    }
    printServer() {
        console.log(this.serverNames);
    }
}
let itDepartment = new ITDepartment("5", []);
console.log(itDepartment);
itDepartment.addServer("server one");
itDepartment.printServer();
itDepartment.printNoOfEmp();
// protected modifier >> that property will  be available in parent class and  child class as well
// it will not be availbale on instance/object created by class
