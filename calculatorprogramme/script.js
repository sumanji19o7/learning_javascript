//calculator programme

const display=document.getElementById("display");
//the display here is a variable getting the value of the display id or tag

function appendtodisplay(input){
    display.value += input;//display.value is the value of display variable
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }

    catch(error){
        display.value="error";
    }
    
}