"use strict";
// Short Hand Initilization
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        //public name : string;
        this.employees = [];
        //this.name = name;
        //this.id = id;
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
let accounting = new Department("Accounting", "1");
console.log(accounting);
accounting.addEmp("Tulsi");
accounting.addEmp("katre");
console.log(accounting);
accounting.describe();
accounting.printNoOfEmp();
//accounting.employees[2] = "I am Tulsi";
//private properties are  only available in class
console.log(accounting);
