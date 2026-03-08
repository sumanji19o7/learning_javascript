//object = a collection of related properties and/or methods 
//can represent real world objects (people,product,places)

//object={key:value,function()}

const person1={
    firstname:"suman",
    lastname:"mishra",
    age:30,
    isemployed:true,

    sayhello: function(){
        console.log(`hi this is spongebob`);
    } //method or function for person 1 
}

const person2={
    firstname:"ramji",
    lastname:"kashyap",//properties of person 2
    age:28,
    isemployed:false,

}


console.log(person1.firstname);
console.log(person2.firstname);

person1.sayhello();//calling the method for person1

//this = reference to the object where this is used(the object depends on the immediate context)
//person.name=his.name

const person101={
    name:"ram",
    favfood:"hamburger",
    sayhello: function(){
        console.log (`${this.name} is eating ${this.favfood}`);
    }
}

person101.sayhello()

//constructor special method for defining the properties and method of objects

function Car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
}

const car1 = new Car("ford","mustang",2024,"red");

console.log(car1.model);


// ES6 feature provides a more tructured and cleaner way to work with objects
//compared to traditional constructor function like static keyword,encapsulation,inheritance

class Product{ //product is a class now can be applied to any number of objects
    constructor (name,price){ //this gives the objects properties of name and price
        this.name=name;
        this.price=price
    }

    displayproduct(){//thi smethod displays the name and price of the object
        console.log(`product : ${this.name}`);
        console.log(`product : ${this.price}`);
    }

    calculate(tax){ //calculates the total price
        return this.price+(this.price*tax);

    }


}
const tax= 0.05;


const product1 = new Product("shirt",19.99);
const product2 = new Product ("pants",29.99);

const total= product1.calculate(tax); //total variable stores the total price using the calculate method


console.log(`the total price with tax is ${total}`)
console.log(`--------------------;`)

//static method declare some quantity static it will remain as is

class User{
    static usercount=0;
    constructor(username){
        this.username=username;
        User.usercount++;

    }
}

const user1= new User("abc");
const user2= new User("def");
const user3= new User("ghi");
const user4= new User("jkl");

console.log(user2.username);

console.log(User.usercount);
/*
//class inheritance using extends

class Animal{
    alive=true;

    eat(name){
        console.log(`${this.name} can eat`);
    }
}

class Fish extends Animal{
    name="fish";
}

const fish = new Fish();

fish.eat();
*/

class Animal {
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
}

class Rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed=runspeed

    }
}

class Hawk extends Animal{
    constructor(name,age,flyspeed){
        super(name,age);
        this.flyspeed=flyspeed;
        
    }
}

const rabbit = new Rabbit("rabbit",1,25);
const hawk = new Hawk("hawk",1,50);

//not writing the name and age again and again , put it in the main Animal class and take it from there by super function
//can also extend a method to children classes

console.log(rabbit.age)