let cl = console.log;
// Enums //

enum Role {ADMIN = 100,READ_ONLY_USER, SUPER_ADMIN};
let person1 ={
    fname : "Tulsi",
    lname : "katre",
    email : "tulsikatremicro@gmail.com",
    token : "tb",
    role : Role.ADMIN,
}

if (person1.role === Role.ADMIN){
    console.log("THIS IS ADMIN");
}

if(person1.role === Role.READ_ONLY_USER){
    console.log("THIS IS CANDIDATE")
}

console.log(Role.ADMIN);
console.log(Role.READ_ONLY_USER);
