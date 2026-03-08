/*function declaration = defined as a reusable block of code
that performs a specific task */

/*function expression = a way to define functions as values or variables*/


console.log(`hi`);
setTimeout(function(){
    console.log("helloji");
},3000);

const numbers = [1,2,3,4,5];
const squares=numbers.map(function (element){
    return Math.pow(element,2);
});

console.log (squares)


//arrow functions = a consice way to write function expressions good 
//for simeple functions thay you use only once
// (parameters) => some code

const hello=function(){
    console.log(`hello`);
}

hello();

//to write this with arrow function

const namaste = () => console.log("helloji");
namaste()

//passing arguments and parameters

const helloing = (name,age) => {console.log(`Helloji ${name}`);
console.log(`you are ${age} years old`);


}

helloing("suman",25);