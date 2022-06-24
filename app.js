// function types in js
// 1)Function Expression 2)Function Statement
function x(){
    console.log("MUMBAI");
}
x()

// 2)Function Statement
var a = function d(){
    console.log("DELHI");
}
a()

// Annonymous Function (Function name is not in this function)
var x = function  (){
    console.log("SANGLI");
}

//First class function and Callback Function
function p(callback){
     callback()
}

function q(){
    console.log("This is a q");
}
p(q)
p(function () {
    console.log("MIRAJ");
})

// Method Chaining (Function in Function)
function demo(){
    return function demo2(){
        return "This is demo2" 
    }   
}
var demo1 = demo()
demo1()

var result = demo()()
console.log(result);

//ES6 Variables
var name = "MISS"
console.log(name);

var name="Shreyas"
console.log(name);

// Let (not redeclare)
let fullname = "Misba Momin"
console.log(fullname);

fullname = "Ash"
console.log(fullname);

// const (not redeclare and not change the value)
const age = 21
console.log(age);

const obj = {name:"MISS",age:21}
obj.name="shreya";
obj={name:"vaibhav"}
console.log(obj);