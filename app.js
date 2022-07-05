// Writing Modular Code with Functions
console.log("Hello World!");

function greetings() {
  return "Hello Thai!";
}

let message = greetings();
console.log(message);

// Immediately Invoked Function Expression (IIFE)
// function greeting() {
//   console.log("Hello");
// }

// greeting();

(function greeting() {
  console.log("Hello");
})();

// Closures
// Example #1
let greeting = (function () {
  let message = "Hello";
  let getMessage = function () {
    return message;
  };
  return {
    getMessage: getMessage
  };
})();

console.log(greeting.getMessage());

// Example #2
function setupCounter(val) {
  return function counter() {
    return val++;
  };
}

let counter1 = setupCounter(0);
console.log(counter1());
console.log(counter1());

let counter2 = setupCounter(10);
console.log(counter2());
console.log(counter2());

// Improving Readability with Arrow Functions

// Behavior of this. keyword:
// this refers to the owner of the function we are executing
// Unlike regular functions, arrow functions do not have their own this value
let message2 = {
  name: "Thai",
  regularFunction: function () {
    console.log("Hello " + this.name);
  },
  arrowFunction: () => console.log("Hi " + this.name)
};
message2.regularFunction(); // Success
message2.arrowFunction(); // Error

// Changing Function Context and Built-in Functions

// Function Context
let greeting2 = {};
greeting2.sayHi = function () {
  console.log("Hi");
  console.log(this);
};
greeting2.sayHi();

// Constructor Function
function sayHi() {
  console.log("Hi");
  console.log(this);
}
let greeting3 = new sayHi();

// call() Method
let person1 = { name: "Tommy", age: 28 };
let person2 = { name: "Bob", age: 27 };
let sayHi2 = function () {
  console.log("Hi, " + this.name);
};
sayHi2.call(person1);
sayHi2.call(person2);

// apply() Method
function introduction(name, profession) {
  console.log("My name is " + name + " and I am a " + profession + ".");
  console.log(this);
}
introduction("Kevin", "student");
introduction.apply(undefined, ["Vincent", "Lawyer"]);
introduction.call(undefined, "Liam", "Gamer");

// Apply vs Call
// apply(): array inputs with similar elements
// call(): individual arguments of varying types

// bind() Method
let person3 = {
  name: "Mila",
  getName: function () {
    return this.name;
  }
};
let person4 = { name: "Faith" };
let getNameCopy = person3.getName.bind(person4);
console.log(getNameCopy());
console.log(getNameCopy); // Note: it's a copy of the getName: f()

// Built-in Functions
// eval() Function
let x = 1;
let y = 2;
console.log(eval("x + y + 1")); // 4

let s = "abc";
console.log(eval("x + y + s")); // 3abc

// parseInt()
// Note: 2nd arg is radix/base
console.log(parseInt("F", 16)); // 15
console.log(parseInt("15", 10)); // 15
console.log(parseInt("Hi", 10)); // NaN

// parseFloat()
console.log(parseFloat("3.99")); // 3.99
console.log(parseFloat("3.99e-1")); // 0.399
console.log(parseFloat("")); // NaN

// escape()
// Returns the hexidecimal encoding of an arg in ISO Latin-1 charset
// WARNING: THIS IS DEPRECIATED
console.log(escape("text")); // text
console.log(escape(" ")); // %20
console.log(escape("abc&%")); // abc%26%25

// unescape()
// Does the opposite of escape()
// WARNING: THIS IS DEPRECIATED
console.log(unescape("text")); // text
console.log(unescape("%20")); //
console.log(unescape("abc%26%25")); // abc&%

// Constructing Rest Parameters and the Spread Operator
// Default Parameters
function sayHi3(name = "World") {
  console.log("Hello " + name);
}
sayHi3();
sayHi3("John");

function sayHi4(message, name = "World") {
  console.log(message + " " + name);
}
sayHi4("Hello");
sayHi4("Hi", "Linh");

// Rest Parameters
// Define a function to store multiple args in a single array
let sayHi5 = function greet(...names) {
  names.forEach((name) => console.log("Hi " + name));
};
sayHi5("Mary", "John", "James");

let sayHi6 = function greet(message, ...names) {
  console.log(message + " everyone!");
  names.forEach((name) => console.log("Hi " + name));
};
sayHi6("Welcome", "Mary", "John", "James");

// Spread Operator
function greet2(person1, person2) {
  console.log("Hello " + person1 + " and " + person2);
}
let names = ["John", "Mary"];
greet2(...names); // Hello John and Mary

function display(char1, char2, char3, char4) {
  console.log(char1, char2, char3, char4);
}
let letters = "abcd";
display(...letters); // a b c d
