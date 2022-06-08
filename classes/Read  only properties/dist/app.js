"use strict";
// Read only properties
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        //public name : string;
        //private id : string;
        this.employees = [];
        //this.name = name;
        //this.id = id;
    }
    ;
    describe() {
        console.log(`Department is ${this.id} : ${this.name}`);
    }
    addEmp(emp) {
        this.id = "New id 2";
        this.employees.push(emp);
    }
    printNoOfEmp() {
        console.log(`${this.employees.length}`);
    }
}
let accounting = new Department("Accounting", "1"); //here id get initialized
console.log(accounting);
accounting.addEmp("Tulsi");
accounting.addEmp("katre");
accounting.addEmp("tulsi");
console.log(accounting);
