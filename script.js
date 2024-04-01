//1..
// // let randomValue = { name: "Kiran" };
// // randomValue = 23;
// // console.log(!typeof randomValue);

// // if (!typeof randomValue === "string") {
// //   console.log("its not a string");
// // } else {
// //   console.log("Its a string ");
// // }
//2..
// // const user = {
// //   email: "myemail@gmail.com",
// //   updateEmail: (email) => {
// //     this.email = email;
// //   },
// // };
// // user.updateEmail("jagdishNewGmail@gmail.com");

// // // console.log(user.email);

// // console.log(this);

//3..

// const animals = {};

// let dog = { emoji: "🐕‍🦺" };

// let cat = { emoji: "🐈‍⬛" };

// animals[dog] = { ...dog, name: "jony" };

// animals[cat] = { ...cat, name: "sara" };

// console.log(animals[cat]);

//4...
// hosting basic question for Interview

// fruit();
// function fruit() {
//   let name = "apple";
//   console.log(name);

//   let price = 200;
//   console.log(price);
// }

// 5..

// for (var i = 5; i <= 10; i++) {
//   setTimeout(() => console.log(i), 10);
// } // output = 3 because using var

// for (let i = 5; i <= 10; i++) {
//   setTimeout(() => console.log(i), 10);
// } // output = 5,6,7,8,9,10  because using let

// console.warn(+true); // number "1" is the output
// console.log(typeof +true); // string

//6..
// console.warn(!"anil"); // false
// console.warn(typeof "anil"); // string

// //7..
// let data = "size";
// const bird = {
//   size: "small",
// };

//      Output
// console.log(bird[data]); // small
// console.log(bird["size"]); // small
// console.log(bird.size); // small
// console.log(bird.data); // undefined

//8..V.vImp//

// let c = { name: "peter" };
// let d;

// d = c;

// c.name = "jagdish";
// console.log(d.name);
// output is jagdish

//9..
// var x;
// let x = 10;
// console.log(x);
// x is already been declared

// //10..
// var x;
// var x = 10;
// console.log(x);
//output is 10

//11..
// let a = 3; // number
// let b = new Number(3); // here is an object

// value is same but typeof is different
// console.log(a == b); // true
// console.log(a === b); // false

// //12..
// function fruit() {
//   console.log("Woof!");
// }

// fruit.name = "apple";
// fruit();

// // 13..
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// 14..
// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21); // output object

// 15..

// const sum = eval("10*10+5");
// console.log(sum); // output 105

// //16..
// let a = []; memoery location is differcent
// let b = []; in this array
// console.log(a == b);
// console.log(a === b);
//output = false ,false

//17..
// let a = []; //memoery location is same in Array
// let b = a;
// console.log(a == b);
// console.log(a === b);
// // output = true, true

// 18..
// let a = [20]; // number
// let b = ["20"]; // string
// console.log(a[0] == b[0]); // output = true
// console.log(a[0] === b[0]); // output = false

//19..
// let z = [1, 2, 3, 4];
// let a = { name: "anil" };
// console.log(...z); // output = 1 2 3 4 destructure the array with spread oprators

// 20..
// console.log(typeof NaN);
// // output is number always in javascript is special type

//21 ..
// let data = 10 - -15;
// console.log(data); //  - - = + then output is = 25

//22..
// const set = new Set([1, 1, 2, 2, 3, 3, 4, 5]);
// console.log(set); // Remove the same value and return the object

//23..
// let data = { name: "Anil" }; // confusion in this code
// console.log(delete data.smail);

//24..
// const data = ["Peter", "anil", "sonu"];
// const [y] = data;
// console.log(y);
// output is = Peter you can use the z and x variable then rest of array element is print

//25.. without . operators find the value
// const data = { name: "anil", age: "29", skill: "MERN" };
// const { skill, age } = data;
// console.log(skill, age);
// // output = MERN, 29

//26.. Merge two object
let data = { name: "ajay", age: "15", skill: "JS" };
let info = { city: "khandwa", mail: "anil@test.com" };
mergeObj = { ...data, ...info };
console.log(mergeObj);
