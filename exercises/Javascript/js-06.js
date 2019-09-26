let numbers = [ 2, 4, 6, 8, 10 ]
let words = "two four six eight ten";

// create a function that takes a number as an argument and it print the word (2 should print "two")
function printWord(number){
    let index = numbers.indexOf(number);
    let word = words.split(" ")[index];
    return index >= 0 ? word : "number is not found";
}
console.log(printWord(2));


// create a function that return array of objects, each object should have two properties, value and description, filled with proper corresponding values 
// [ { value: 2, description: "two" }, ... , { value: 10, description: "ten" } ]
function transformArray(array,descriptions){
    descriptions = descriptions.split(" ");
    return array.map(function(number,index){
        return { value: number, description : descriptions[index] };
    });
}
console.log(transformArray(numbers,words));


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
let result = data.sort();
console.log(result);
let reducer = function(result,current){
    result[current] = !result[current] ? 1 : ++result[current];
    return result;
};
result = result.reduce(reducer,{});
console.log(result);
