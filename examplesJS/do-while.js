let numbers = [2,4,6,8,10];


// DO WHILE / IT WILL EXECUTE AT LEAST 1 TIME
let i = 0;
do{
    console.log(numbers[i]);
    i++;
}while(i<numbers.length)

// ANOTHER WAY TO INTERRUPT LOOP
i=0;
do{
    console.log(numbers[i]);
    i++;
    if(i>=numbers.length){
        break;
    }
}while(true)