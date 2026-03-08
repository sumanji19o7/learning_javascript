import {PI,getcircumference,getvolume} from './mathutil.js'; //now all the function in the brackets are in the index.js file


console.log(PI);
const circumference= getcircumference(10).toFixed(2);

console.log(circumference);

//errors = an object that is created to represent a problem that occurs

//error handling
//try{}-enclose any code that might potentially cause an error
//catch-catch an error object and handle thrown error from try {}
//finally{}-optional always executes used mostly for closing files and connection


try{
    console.log(x);
}

catch(error){
    console.error(error);
}

finally{
    console.log("this always executes");
}
