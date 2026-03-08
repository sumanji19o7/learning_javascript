//callback = a function is passed as an argument to another function
//if we have to wait for a function to be executed   
hello(wait); //hello executed first then the wait or bye function;

function hello(callback){
    console.log(`Helloji`);
    callback();
}

function bye(){
    console.log(`byeji`);
}

function leave(){
    console.log('dismissed');

}

function wait(){
    console.log(`please wait`);
}

sum(display,1,2)
function sum (callback,x,y){
    let result = x+y;
    callback(result);//calling the callback function, result as an argument to the callback function

}

function display(result){
    console.log(result);
}

//sum function called with argument display and the display is called in the sum function
//the display function called takes the result from the sum function
// sum--> display-->callback-->result to display


//foreach() = method used to iterate over the elements
//of an array and apply a specified function(callback) to each element 

//array.forEach(callback)
//element,index and array automaticdally provided
console.log(`------------------`)

let numbers= [1,2,3,4,5,6];


numbers.forEach(double);
numbers.forEach(display);  


function double(element,index,array){
    array[index] = element*2;
}


function display(element){
    console.log(element)
}


console.log(`------------------`);

let fruits=["apple","banana","orange"];

fruits.forEach(convetringupper);
fruits.forEach(writing);

function convetringupper(fruit,index,array){
    array[index]=fruit.toUpperCase()
    writing;
}

function writing(fruit){
    console.log(fruit)  
}

//.map()= accepts a call back and applies that function
//to each element of an array , then returns a new array


//the map function is same as the to each but return a list

const dates =["2024-1-10","2025-2-20"];
const formatted=dates.map(formatdates);
console.log

console.log(formatted)
function formatdates(element){
    const parts=element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;


}


//.filter()=creates a new array by filtering out elements

let num=[1,2,3,4,5,6];//number array

let evennum=num.filter(iseven);//filter elements which are even , the filter refers to the iseven function
let oddnum=num.filter(isodd);//filter elements which are odd, the filter refers to the isodd function
//the filter only filters the values which return true from the following function
console.log(oddnum + ` are the oddnumbers`);
console.log(evennum+` are the even numbers`);

function iseven(element){
    return element %2 ===0;
}

function isodd(element){
    return element%2 !==0;
}

console.log(`------------------------------`+ `reduce function`)

//.reduce() function = reduce the elemetns of an array to a single value
const prices=[5,12,34,23,45]
const total=prices.reduce(sum);

console.log(`the total is ${total}`)

function sum(previous,next){  //accumulator is the previous element and element is the next element
    //first run the previous is zero next is 5 then the previous is 5 and next is 12

    return previous+next;

}


const grades = [45,68,90,55,78,75];
const maximum=grades.reduce(getmaximum)

function getmaximum(accumulator,element){
    return Math.max(accumulator,element);
}




