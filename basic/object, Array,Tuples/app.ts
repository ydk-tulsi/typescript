let cl = console.log;

let person : {name : string,age : number,hobbies:string[],role:[number,string,boolean,boolean,boolean]} = {
    name:"Tulsi",
    age: 24,
    hobbies : ["cooking",'writing'],
    role : [2,"Read Only",false,true,false]
}

cl(person.name);
cl(person.age);
cl(person.hobbies);
//cl(person.nickName);

let myActivities: string[] = ["cooking",'writing'];

myActivities.push("100");

for (let activity of myActivities){
    console.log(activity.toUpperCase())
}

for (let hobby of person.hobbies){
    console.log(hobby.toLowerCase())
}
person.role.push("superAdmin"); 
console.log(person);

person.role.push(1);
console.log(person);

//>>>>>>>>>Tuples>>>>>>>>//

// person.role[0] = "superAdmin";
// person.role[1] =10;

person.role = [10, "Admin",false,true,false]

person.role.push("fault");
console.log(person.role);