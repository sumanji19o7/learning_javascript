//random password generator

function generatepassword(length,includelower,includeupper,includenumbers,includesymbols){
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const upeprcase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="1234567890";
    const symbols="!@#$%^&*()_+~`/?.>,<[]\{}|";

    let allowedchars="";
    let password="";

    allowedchars += includelower ? lowercase : "";
//allowed chars += check if include lower if true add lowercase other wise
    allowedchars += includeupper ? upeprcase : "";
    allowedchars += includenumbers ? numbers : "";
    allowedchars += includesymbols ? symbols : "";

    if (length<=0){
        return`(password length must atleast be 1)`;

    }
    
    if (length === 0){
        return `(please select atleast one set of characters)`
    }

    for (i=0;i<length;i++){
        const randomindex=Math.floor(Math.random() * allowedchars.length);
        password+=allowedchars[randomindex];
    }

    return password;
}

const passwordlength=12;
const includelower=true;
const includeupper=true;
const includenumbers=false;
const includesymbols=false  ;

const pass=generatepassword(passwordlength,includelower,includeupper,includenumbers,includesymbols);
console.log(pass)   