// EXERCISE 8

let input1 = [{ tile: "N", score: 1 }, { tile: "O", score: 1 }];
// expected output - 2

let input2 = [
  { tile: "Y", score: 4 },
  { tile: "E", score: 1 },
  { tile: "S", score: 1 }
];
// output -	6

let input3 = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];
// output 28

let countScore = tiles => {
  return tiles.reduce((totalScore, currentTile) => {
    return totalScore + currentTile.score;
  }, 0);
};

console.log(countScore(input1));
console.log(countScore(input2));
console.log(countScore(input3));

// EXERCISE 7
let input4 = { a: 1, b: 2, c: 3 };
//	output
/* 
{ 
    keys: ["a", "b", "c"], 
    values: [1, 2, 3] 
} 
*/
let input5 = { isBrown: true };
// output { keys: ["isBrown"], values: [true] }
let transformObject = object => {
  return {
    keys: Object.keys(object),
    values: Object.values(object)
  };
};

console.log(transformObject(input4));
//console.log(transformObject(input5));

let arr = [2, 4];
console.log(Array.isArray());
