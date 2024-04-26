// Question:- 1

// let a = [];
// let b = [];
// console.log(a == b); // output false // Only check the value
// console.log(a === b); // output false // Both of check value and type

//Question:- 2

// let a = [];
// let b = a;
// console.log(a == b); // true // Both have same vlaue in the code
// console.log(a === b); // true

//Question:- 3

// let a = [20];
// let b = ["20"];
// console.log(a[0] == b[0]); // true // Only check value is true
// console.log(a[0] === b[0]); // false // Strict check value and type of both has same value

//Question:- 4

// let z = [1, 4, 6, 8, 10];
// let a = { name: "anil" };
// console.log(...z); // This ... spread operator is copy the value and desurcturing with elements

// //Question:- 5

// console.log(typeof NaN); // Not a Number is

//Question:- 6

// let data = 10 - -10;
// console.log(data);

//Question:- 7

// const set = new Set([1, 2, 3, 4, 5, 9, 8]);
// console.log(set);

//Question:- 8

// solved //

// let data = { name: "Anil" };
// console.log(delete data.name);
// console.log(data); // {} empty object is there in delete after the object

//Question:- 9

// const data = ["Peter", "Anil", "Sam"];
// const [b, c] = data;
// console.log(b, c);

//Question:- 10

// const data = { name: "Anil kumar", age: 29, skill: "JS" };
// console.log(data);
// console.log(data.age);

//Question:- 11

// let data = { name: "Anil", age: 28, skill: "JS" };
// let info = { city: "Noida", email: "anunjguta@gmail.com" };

// data = { ...data, ...info };
// console.log(data);

//Question:- 12

// let data = { name: "Anil", age: 29, skil: "JS" };
// let info = { city: "Noida", skill: "Node" };
// console.log(...data, ...info); // output Node // key is first object and skiil is second object
// console.log(data);

// //Question:- 13

// const nameIsPerson = "Anil";
// console.log(nameIsPerson);

//Question:- 14

// const result = false || {} || null;
// console.log(result); //

//Question:- 15

// const result = false || {} || null;
// console.log(result); // {} is first value in result varible

//Question:- 16

// const resolve = null || "false" || "";
// console.log(resolve); // output "" empty is clear the both of value is false then "" empty string is return last one

//Question:- 17

// const result = [] || 0 || true;
// console.log(result); // outputValue is = [];

//Question:- 18

// console.log(Promise.resolve(5));

//Question:- 19

// console.log("💖" === "💖");
//output :- true // Because of the emoji is value is true

//Question:- 20

// JSON.parse();

// what this method will do
// A: Parse JSON to a javascript value
// B: Parse a Javascript object to JSON
// C: Parse any Javascript value of JSON
// D: Parse JSON to a javascript object value

//Question:- 21

// var nameSid = "Sindhu";

// function getName() {
//   console.log(nameSid);
//   //   let name = "Anil";
// }

// getName();

//Question:- 21

// let nameValue = "Anil";

// function getName() {
//   console.log(nameValue);
// }

//Question:- 22

// let name = "Anil";

// function getName() {
//   console.log(name);
// }

// getName();

//Question:- 23

// let myName = "Anil";

// console.log(`${((x) => x)("I love")} to program`);

// function sumValue(x, y, z) {
//   return x + y + z;
// }
// console.log(sumValue(...[1, 2, 3])); // 6 desturcture the array in value

// sumValue([...[1, 2, 3]]); // output is 6 does not desturcture the value

// sumValue(...[1, 2, 3]);

//Question:- 24

// const name = "Code step by step";
// console.log(typeof name === "object");
// console.log(!typeof name === "string");
// console.log(!typeof name === false);

//Question:- 25

// const name = "Subscribe";
// const age = 21;

// console.log(isNaN(name)); // true
// console.log(isNaN(age)); // false

//Question:- 26

// let person = { name: "Anil" };
// console.log(person.name); // output => Anil

// Object.seal(person);
// person = "sonusingh";
// console.log(person);
// output ==> sonusingh

//Question:- 27

// let dataF = [2, 4, 8, 9, 10];
// dataF.shift();
// console.log(dataF); // output ==> [4,8,9,10] shift method remove First Item

//Question:- 28

// let dataP = [2, 9, 8, 7, 0];
// dataP.pop();
// console.log(dataP);
// output ==> Remove Item from last in the array

//Question:- 29

// let data = {
//   name: "Anil",
//   age: 25,
// };
// delete data.age;
// console.log(data);

// Delete operater is used for delete the array and they make empty array

//Question:- 30

let data = "true";
console.log(typeof data); // ! -- Use this nagation in the code they value of the change the value string into boolean(false)
//output ==> string is type in true in string

//Question:- 31

let dataValue = ["anil", "peter", "bruce"];
delete dataValue[2];
console.log(dataValue);
