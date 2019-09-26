let numbers = [ 5, 10, 15, 20, 25 ]

//forEach IS NOT RETURNING ANY ARRAY, IT WILL ALWAYS RETURN UNDEFINED, SO WE SHOULDN'T TRY TO SAVE IT'S RESULT TO VARIABLE

//PRINTING OUT THE NUMBERS
numbers.forEach(function(number){
    console.log(number);
})

//PRINTING OUT THE INDEXES OF NUMBERS
numbers.forEach(function(number,index){
    console.log(index);
})

// MODIFYING THE ARRAY BY INCREMENTING VALUES WITH 2
numbers.forEach(function(number,index,array){
    // number = number + 2; // IT WILL NOT AFFECT THE ARRAY
    array[index] = number + 2; // THIS WILL MUTATE THE ARRAY
})
console.log(numbers);

//ALTERNATIVE FOR continue;
numbers.forEach(function(number,index,array){
    if(number % 2 === 0){ // IF THE NUMBER IS EVEN IT WILL BE NOT INCREMENTED
        return; // WITH RETURN STATEMENT WE GO TO THE NEXT ITERATION
    }
    array[index] = number + 2;
})
console.log(numbers);