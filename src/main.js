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
const userName = "kadir";
const password = "123";

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

// conditionals (if else)
let inputUserName = prompt("Username");
let inputPassword = prompt("Password");

if (inputUserName == userName && inputPassword == password) {
    console.log("Welcome");
}else if (inputUserName != userName && inputPassword == password) {
    console.log("Username is incorrect!");
}else if (inputPassword != password && inputUserName == userName) {
    console.log("Password is incorrect");
}else {
    console.log("Username or Password is incorrect!");
}