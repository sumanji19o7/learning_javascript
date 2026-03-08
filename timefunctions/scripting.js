//seet time out = allwos you to schedule the execution of function
/*
function sayHello(){
    window.alert("hello");
}

setTimeout(sayHello,3000);
// or it can be given in the form of arrow function too

setTimeout(() => {
    window.alert("hello")
}, 3000);*/

let timeoutid
function startTimer(){
    timeoutid=setTimeout(()=> window.alert("hello"),3000);
    console.log("started");
}

function clearTimer(){
    clearTimeout(timeoutid);
    console.log("cleared");
}

