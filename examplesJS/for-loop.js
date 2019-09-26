let numbers = [ 5, 10, 15, 20, 25 ];
for(let i = 0; i < numbers.length; i++){
    console.log("Index of element:", i);
    console.log("Value of element", numbers[i]);
}

// PRINTING ODD NUMBERS from 1 to 100 WITH INCREMENTATION BY 2
for(let i = 1; i < 100; i+=2){
    console.log(i);
}

// 2 DIMENSIONAL ARRAY
let numbers2D = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8 ,9 ]
]
// LOOPING THROUGH 2 DIMENSIONAL ARRAY (ARRAY INSIDE OF AN ARRAY)
for(let i = 0; i < numbers2D.length; i++){
    console.log(numbers2D[i]); // HERE WE ACCESS THE SUB ARRAY
    for(let j = 0; j < numbers2D[i].length; j++){
        console.log(numbers2D[i][j]); // HERE WE ACCESS THE ELEMENTS OF SUB ARRAY
    }
}

// USING CONTINUE AND BREAK

// THIS CODE DISPLAYS EVEN NUMBER WITH USE OF CONTINUE
for(let i = 1; i <= 100; i++){
    if(i % 2 === 1) { // IF THE NUMBERS IS ODD IT GOES TO THE NEXT ITERATION WITHOUT EXECUTING CODE AFTER IF STATEMENT
        continue;
    }
    console.log(i);
}

// THIS CODE SUM ALL THE NUMBERS FROM 1 to 100 UNTIL SUM IS SMALLER OR EQUAL 100
let sum = 0;
for(let i = 1; i < 100; i++){
    if( (sum + i) > 100 ){
        console.log("Final sum is", sum);
        console.log(i ,"can't be added because sum will extend 100");
        i--;
        console.log(i,"elements were summed");
        break;
    } else {
        sum += i;
        console.log(i,"Sum is",sum);
    }
}

// FOR ... OF
for(let number of numbers){
    console.log(number);
}

// FOR ... OF WITH 2D ARRAY / NESTED FOR LOOP
for(let subarray of numbers2D){
    for(let number of subarray){
        console.log(number);
    }
}