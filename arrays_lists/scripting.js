//arrays- group of object a variable like structure that can hold more than 1 value

let fruits=["mango","apple"];
//fruits.push("coconut"); to add element at the array
//fruits.pop();remove the last element
//fruits.unshift("mango");adds an element to the beginning
//fruits.shift();deletes element from the beginning of the array
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

//length of array
let x = fruits.length;
let indexelement= fruits.indexOf("mango");

// traversing the array use FOR LOOP

for (let i = 0 ; i<fruits.length; i++){
    console.log(fruits[i]+i);
}

// or we can write without the indexing like in python for fruit in fruits

for( let fruit of fruits){
    console.log(fruit); 

}

//backward order

fruits.sort().reverse()


//spread operator unpacks the iterable element like an array use it by three dots ...
let numbers= [1,2,3,4,5];
let maximum = Math.max(...numbers);// simple number wont work will give output as NaN

console.log(maximum);//output will give 5 as all the elements ae unpacked

//can use the separd operator to combine arrays

let veggies = ["carrot","radish"]

let foods=[...fruits,...veggies]
console.log(foods)

//rest parameters is opposite of spread elements it bundles the group of elements into an array
function openfridge(...food){
    console.log(food);
}

const food1="burger";
const food2="sushi";
const food3="hotdog";
const food4="coldrink";
openfridge(food1,food2,food3,food4);

function combinestrings(...strings){
    return strings.join("sjfasd---   ");

}
const fullname= combinestrings("Mr","Spongebob","Squarepants");
console.log(fullname);      