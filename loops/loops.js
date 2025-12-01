//while loop are the loops based on the condition
/*let username= "";
while (username === "" || username==null){
    username=window.prompt(`Enter your name: `)

} 

console.log(`Hello ${username}`)*/

// a do while loop 
// do the code at the start then start the while loop

/*let username;
do{
    username=window.prompt(`enter your name: `); //first execute the line inside do 
}while (username === "" || username === null ) //then go on with the while lop[]

console.log(`Helloji ${username}`)  


//for loop repeat a number of codes a certain number of times

for(let i = 0; i<=2; i++){
    console.log(`Hello ${i}`)

}

console.log(`happy new year`)*/

const min= 1;
const max= 100;


const answer = Math.floor(Math.random()*(max-min +1)) + min;
console.log(answer);

let attempts=0;
let guess;
let running=true


while(running){
    guess = window.prompt(`enter your guess: `)
    guess= Number(guess)
    

    if (isNaN(guess)){
        window.alert(`please enter a number!`)
    }

    else if (guess < min || guess > max){
        window.alert("please enter a valid number")
    }

    else{
        attempts++
        if (guess<answer){
            window.alert(`guess higher`)

        }

        else if (guess > answer){
            window.alert(`guess lower`)
        }
        else{
            window.alert(`Correct the answer was ${guess}, it took you ${attempts} attempts`);           
            running=false;      
        }
    }

    

}