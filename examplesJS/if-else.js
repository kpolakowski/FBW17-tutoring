let number = 10;

// BASIC IF STATEMENT
if(number > 10){
    console.log("Number is bigger than 10");
} else if(number < 10){
    console.log("Number is smaller than 10");
} else{
    console.log("Numbers is equal to 10");
}

// MULTIPLE CONDITION
if(number > 10 || number < 10){
    console.log("Number is bigger or smaller than 10");
} else{
    console.log("Numbers is equal to 10");
}

number = "12"
if((number > 10 || number < 10) && typeof number === "number"){
    console.log("Number is bigger or smaller than 10 and it has number type");
} else{
    console.log("Numbers is equal to 10 or it is not number");
}