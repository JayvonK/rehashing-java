import {injectHere, cardBtn, MakeCard } from "./cardMaking.js";

let changeHeaderBtn = document.getElementById("changeHeaderBtn");
let header = document.getElementById("header");
let spinBtn = document.getElementById("spinBtn");
let rollBtn = document.getElementById("rollBtn");
let waddleBtn = document.getElementById("waddleBtn");
let pulseBtn = document.getElementById("pulseBtn");
let changeMe = document.getElementById("changeMe");
let numberBtn = document.getElementById("numberBtn");
let randomNumber = document.getElementById("randomNumber");
let studentList = [{
    "firstName": ["I", "Love", "My", "Girlfriend", "Giselle", "Pena"]
},
{
    "firstName": ["Jayvon", "Davian", "Khuth", "Is", "In", "Luv"]
},
{
    "firstName": ["Babe", "is", "the", "best", "gf", "ever"]
}]

changeHeaderBtn.addEventListener('click', function (event) {
    if (header.innerText === "Hello, world!") {
        header.innerText = "I have been changed!";
    } else {
        header.innerText = "Hello, world!";
    }
});

spinBtn.addEventListener('click', function (e) {
    changeMe.className = "spinner";
})

rollBtn.addEventListener('click', function (e) {
    changeMe.className = "barrelRoll";
})

pulseBtn.addEventListener('click', function (e) {
    changeMe.className = "pulse";
})

waddleBtn.addEventListener('click', function (e) {
    changeMe.className = "wiggle";
})

let listIndex = Math.floor(Math.random() * studentList.length);
let listIndex2 = Math.floor(Math.random() * studentList[0].firstName.length)

console.log(studentList[listIndex].firstName[listIndex2]);


numberBtn.addEventListener('click', function () {
    fetch('https://api.adviceslip.com/advice').then(
    number => number.json().then(
        data => randomNumber.innerText = data.slip.advice
    ))
})

cardBtn.addEventListener('click', function(e){
    MakeCard("Title")
});

