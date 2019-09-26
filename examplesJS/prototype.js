//CUSTOM REDUCE FUNCTION WITH PROTOTYPE
Array.prototype.customReduce = function(callback, initialValue){
    let result = initialValue===undefined ? this[0] : initialValue;
    this.forEach((item,index)=> {
        if(initialValue===undefined && index===0) return;
        console.log(item);
        console.log(result)
        result = callback(result,item)
    });
    return result;
}


// CUSTOM REDUCE ON ARRAY OF NUMBERS
let numbers = [ 1,2,3,4 ]
let sum = numbers.customReduce(function(sum,current){
    console.log(sum);
    return sum + current;
});
console.log(sum);
console.log(numbers)



// CUSTOM REDUCE ON ARRAY OF OBJECTS
let cars = [
    { price : 10000 },
    { price : 20000 },
    { price : 30000 }
]
let prices = cars.customReduce(function(sum,current){
    return sum + current.price;
},0);
console.log(prices);
console.log(cars);
