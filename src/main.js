"use strict";
let helloMessage = "Hello JS";

//Variables
let name = "Kadir";
let lastName = "Birdal"
let fullName = name + " " + lastName;
let age = 27;

let message = "Hello my name is " + fullName + ". I'm " + age + " years old. I'm learning Javascript.";
console.log(message);

const birthDate = "17.03.1997";
const userID = "1234567890";
let isAdmin = false;

//Type Conversions
let user2ID = Number("1234");
console.log(typeof user2ID);

let age2 = String(30);
console.log(typeof age2);

//Operators
let apple = 0;
console.log(apple);
apple += 5;
console.log(apple);
apple -= 1;
console.log(apple);
apple *= 2;
console.log(apple);
apple /= 3;
console.log(apple);
apple++;
console.log(apple);
apple--;
console.log(apple);
