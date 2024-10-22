"use strict";
const {myMath} = require("./MyMath");
const {Component} = require("./Components");
console.log("hello world");



const component = new Component("new info");
console.log(component.content);


const result =myMath.sum(5,7);
console.log('result =', result);

