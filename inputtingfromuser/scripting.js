//to ways to input from user
//one is to create a window prompt

//professional way is through html text box and submit button
let username;

document.getElementById("submitting").onclick = function(){
    username=document.getElementById("text").value;
    document.getElementById("greeting").textContent = `hello ${username}`;


}

let age;
age=window.prompt("enter your age:");
age=Number(age);
console.log(age, typeof age);


//const is a variable that cannot be changed

const pi= 3.14;
let radius;
let circumference;

document.getElementById("radius_submit").onclick = function(){
    let radius = Number(document.getElementById("radiusinput").value);
    const pi = Math.PI;
    let circumference = 2 * pi * radius;
    document.getElementById("displayingcircumference").textContent = circumference.toFixed(2);
}



