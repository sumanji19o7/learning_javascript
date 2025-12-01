//function is a block of code which is reusable multiple times
//declare function in the defination write the code inside the block then call the function to execute
//the code block 


function HappyBirthday(username,age){ //these are parameters(these are parameters recieved)
    console.log(`Happy birthday ji`);
    console.log(`happy birthday ${username}`);
    console.log(`You are ${age} years old`);
}

HappyBirthday("Sumanji",25); //these are arguments (passed)

function add(x,y){
    let result = x+y;
    return result;

}

console.log(add(2,3));

//has variable scrop global and in function(local scope)