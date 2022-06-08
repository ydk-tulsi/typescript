var cl = console.log;
var person = {
    name: "Tulsi",
    age: 24,
    hobbies: ["cooking", 'writing'],
    role: [2, "Read Only", false, true, false]
};
cl(person.name);
cl(person.age);
cl(person.hobbies);
//cl(person.nickName);
var myActivities = ["cooking", 'writing'];
myActivities.push("100");
for (var _i = 0, myActivities_1 = myActivities; _i < myActivities_1.length; _i++) {
    var activity = myActivities_1[_i];
    console.log(activity.toUpperCase());
}
for (var _a = 0, _b = person.hobbies; _a < _b.length; _a++) {
    var hobby = _b[_a];
    console.log(hobby.toLowerCase());
}
person.role.push("superAdmin");
console.log(person);
person.role.push(1);
console.log(person);
//>>>>>>>>>Tuples>>>>>>>>//
// person.role[0] = "superAdmin";
// person.role[1] =10;
person.role = [10, "Admin", false, true, false];
person.role.push("fault");
console.log(person.role);
