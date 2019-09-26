let karol = { 
    name:"Karol", 
    age: 30, 
    height:180, 
    weight: 80, 
    hobbies:["volleyball", "pizza", "javascript"]
}

// FOR ... IN
// ITERATING THROUGH ARRAY
for(let prop in karol){

    // prop CONTAINS KEY OF CURRENT ITEM
    console.log("Key",prop);
    
    // TO ACCESS VALUE OF PROPERTY YOU NEED TO USE karol[prop] NOTATION, WHERE karol IS NAME OF OBJECT
    // AND prop IS KEY
    console.log("Value",karol[prop]);
    
}