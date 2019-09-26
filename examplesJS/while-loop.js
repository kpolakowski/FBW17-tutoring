let index = 1;
let sum = 0;

//SUM NUMBERS FROM 1 to 100
while(index<=100){
    sum += index++;
}
console.log(sum);

//SUM ONLY ODD NUMBERS FROM 1 to 100, USE CONTINUE
index = 0;
let sumOdd = 0;
while(index<=100){
    if(index % 2 === 0) {
        index++;
        continue;
    }
    sumOdd += index++;
}
console.log(sumOdd);


//SUM ONLY EVEN NUMBERS FROM 1 to 100, USE BREAK
index = 0;
let sumEven = 0;
while(true){
    if(index>100) break;
    if(index % 2 !== 0) {
        index++;
        continue;
    }
    sumEven += index++;
}
console.log(sumEven);