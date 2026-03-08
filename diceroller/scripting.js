function rolldice(){
    const numdice= document.getElementById("numdice").value; //value from the input box
    const diceresult = document.getElementById("diceresult");//
    const diceimages = document.getElementById("diceimages");
    const values=[];//array with the random values
    const images=[];//array with all the images corresponding to the random values generated
    
    for (let i = 0 ; i < numdice; i++){
        const value= Math.floor(Math.random()*6)+1 //loop from 0 to 6
        values.push(value);
        images.push(`<img src="dice${value}.png">`);//pushing the images in array
        
    }

    diceresult.textContent=`dice: ${values.join(`-`)}`//joining the values of the array
   diceimages.innerHTML=images.join(` `); // join returns the string with all the elements joined together separated by the value
}