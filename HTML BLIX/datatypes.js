let number = 42;
let s = "hello world";
let boolean = true;
let undefinedVar;
let nullVar = null;
let symbolVar = Symbol("unique");
let bigIntVar = BigInt(12345678900987654321);
let objectVar = { key: "value"};
let arrayVar = [1,2,3,4,5];
let functionVar = function(){return "This is from Function"};
let object2={
    name: "Spider man",
    age:30,
    isEmployed: true,
    hobbies: ["gaming","driving","coding"],

}

console.log("Number",number);
console.log("String",s);
console.log("Boolean",boolean);
console.log("Undefined",undefinedVar);
console.log("null",nullVar);
console.log("bigint",bigIntVar);
console.log("symbol",symbolVar);
console.log("Array",arrayVar);
console.log("function",functionVar());
console.log("object",objectVar);
console.log("object2",object2);
