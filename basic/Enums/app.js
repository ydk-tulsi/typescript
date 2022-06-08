var cl = console.log;
// Enums //
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 101] = "READ_ONLY_USER";
    Role[Role["SUPER_ADMIN"] = 102] = "SUPER_ADMIN";
})(Role || (Role = {}));
;
var person1 = {
    fname: "Tulsi",
    lname: "katre",
    email: "tulsikatremicro@gmail.com",
    token: "tb",
    role: Role.ADMIN
};
if (person1.role === Role.ADMIN) {
    console.log("THIS IS ADMIN");
}
if (person1.role === Role.READ_ONLY_USER) {
    console.log("THIS IS CANDIDATE");
}
console.log(Role.ADMIN);
console.log(Role.READ_ONLY_USER);
