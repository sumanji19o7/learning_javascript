const  decreasing = document.getElementById("decreasing");
const increasing = document.getElementById("increasing");

const counter= document.getElementById("counter");
let count=0;
/*have to write idname. onclick to follow a function*/
increasing.onclick = function(){
    count++;
    counter.textContent = count;
}

decreasing.onclick = function(){
    count--;
    counter.textContent = count;
}


resetting.onclick = function(){
    
    counter.textContent = 0
}


let randomnum=Math.random();
console.log(randomnum);


let time = 14;
if (time < 12){
    console.log("Good morning");
}

else{
    console.log("Good afternoon");
}

/*switches and cases*/

let day=`pizza`;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log(`${day} is not a day`)
}


//string methods length slicing indexing at index from last

//let phone number = '123-456'

//phonenumber=phonenumber.replaceAll('-',"")
//console.log(phonenumber)

//padstart some character until there are some number of characters long 
//padend some character until some number of


//method chaining- one method after one another
let username = window.prompt(`enter your username: `); //entering username
//NO METHOD CHANGING

username=username.trim();   //remove white spaces
let letter =username.charAt(0);//extract first letter to letter variable
letter=letter.toUpperCase();//letter to uppercase

let extraChars = username.slice(1);//the letters from second till last stored in variable
extraChars =extraChars.toLowerCase;//all converted to lower case

username=letter + extraChars;//username equals to firs capital and rest lowercase
console.log(username)//print the username

//AFTER METHOD CHANGING
username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase
//take out username we trim it then the char at index 0 convert it to uppercase 


//logical operators 
//used to combine or manipulate boolean values 


//and = &&  
//or = ||
//not=!

const temp = -100;

if (temp > 0 && temp <= 30){
    console.log("The weather is good")
}

else {
    console.log("the weather is bad")
}


//equality operator

// =assigment oeprator
// ==comparision operator
// ===strict equality operator (compare value and datatypes)
// !=inequability operator 
// !== strictly inequality operator

/*pi equal to 3.14

then if pi == 3.14 will result in true as values equal
IF PI=== "3.14 " IT WILL RETURN FALSE AS DATA TYPE ARE STRING AND NUMBER
IF PI === 3.14 IT WILL RETURN TRUE*/


