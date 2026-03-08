//getter=special method that makes a property readable

// setter=special method that makes a property writeable

//validate and modify a value when reading/writing

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;

    }

    set width(newwidth){
        if (newwidth>0){
            this._width = newwidth;//this width is different is 

        }

        else{
            console.error("width must be a positive number")
        }
    }

    set height(newheight){
        if (newheight>0){
            this._height = newheight;

        }

        else{
            console.error("width must be a positive number")
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }
}

const rectangle = new Rectangle(3,4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(`--------------------`);

//destructuring = extract values from arrays and objects 
//then assign them to variables in a convient way

//[]= to perform array destructuring
//{}= to perform object destructuring

//1. swap value of two variables

let a = 1;
let b = 2;

[a,b]=[b,a];
console.log(a);//should return 2 after swapping
console.log(b);//should return 1 after swapping

console.log(`----------------------`)


//2.swap 2 elements in array

const colors=["red","green","blue","black"];

[colors[0],colors[3]]=[colors[3],colors[0]];

console.log(colors);

//3.assign array elements to variables

const [firstcolor,seccolor,thirdcolor,...extracolors]=colors;

console.log(extracolors);
console.log(firstcolor);//should be black

console.log(`-----------------`);

//4. extract values from objects






//5. destructure in function parameters

function displayperson({firstname,lastname,age}){//destructuring is necessary
    console.log(`name is ${firstname} `);
    console.log(`age is ${age}`);
    console.log(age);

}

const person1 = {
    firstname : "sq",
    lastname : " jk",
    age: 30,

}

const person2 = {
    firstname : "ab",
    lastname : " vd",
    age: 28,
}  

displayperson(person1);

const fruits = [{name:"apple",color:"red",calories:95},
    {name:"banana",color:"yellow",calories:105}
];


console.log(fruits[1].name) //accessing properties of the fruits
//forrach()

//fruits.forEach(fruit => console.log(fruit.name));

const lowcals=fruits.filter(fruit=> fruit.calories <= 100);
console.log(lowcals[0].name);

//SORTING- method used to sort elements of an array in place
// sorts elements in lexicographic order

let numbers= [1,4,3,5,6,7,8,2,10];

numbers.sort ((a,b) => b-a);
console.log(numbers);

//same can be used to sort using object properties

//dates
//Date(year,month,day,hour,minute,second,millisec)

const date= new Date(2024,0,1,2,3,4,5);
const date2= new Date("2024-01-02T12:00:00Z");

console.log(date);
console.log(date2);

//closure = function defined inside of another function
/**the inner function has access to the variables
 * and the scope of the outer function
 * allow for private variables and state maintance used in frameworks
 */


function outer(){
    let message = "Hello";

    function inner(){   //inner function has access to every variable in the outer function
        console.log(message);
    }
    inner();
}

//the message in the function cant be changed outside the function
outer();

function keepcount(){
    let count = 0;
    function increment(){
    
    count++;
    console.log(`count increased to ${count}`);

    }

    function getcount(){
        return count;
    }

    return {increment,getcount}; //add another property refrencing the get count function

}

//can maintian the state of the variable to be stable and not reset to zero everytime it is called

const counter = keepcount()

//counter function to increment function

counter.increment();
counter.increment();
//counter is like a class with the method increment

console.log(`The current count is ${counter.getcount()}`)

function createdgame(){
    let score=0;
    function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
    }

    function decreasescore(points){
        score -= points;
        console.log(`-${points}pts`)

    }

    function getScore(){
        return score;
    }




    return {increaseScore,decreasescore,getScore};

}

const game=createdgame();//the game variable has the whole createdgame function access

game.increaseScore(5);
game.decreasescore(2);

console.log(`the final game score is ${game.getScore()} points`);
