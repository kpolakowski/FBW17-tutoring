let sentence = "This is my sentence."

//charAt(index)
console.log(sentence.charAt(2));

//concat(string)
console.log(sentence.concat(" And this is new sentence."));

//includes(searchString)
console.log(sentence.includes("my"));
console.log(sentence.includes("your"));

//charcode(index)
console.log(sentence.charCodeAt(2));

//indexOf(searchString)
console.log(sentence.indexOf("my"));

//lastIndexOf(searchString)
console.log(sentence.lastIndexOf("is"));

//repeat(count)
console.log(sentence.repeat(2));

//replace(searchValue, newValue) or repeat(regExp, newValue)
console.log(sentence.replace('my','your'));
console.log(sentence.replace(/e/g,'u'));

//search(string) or seaarch(regExp)
console.log(sentence.search('my'));
console.log(sentence.search(/is/));

//slice(index)
console.log(sentence.slice());
console.log(sentence.slice(3));
console.log(sentence.slice(3,7));

//split(separator)
console.log(sentence.split(" "));

//startsWith(searchString) or startsWith(searchString, position)
console.log(sentence.startsWith('i'));
console.log(sentence.startsWith('i',2));

//endsWith(searchString) or endsWith(searchString, position)
console.log(sentence.endsWith('i'));
console.log(sentence.endsWith('i'));

//substr(from, length)
console.log(sentence.substr(2,4));

//substring(start, end)
console.log(sentence.substring(2,4));

//toLowerCase()
console.log(sentence.toLowerCase());

//toUpperCase()
console.log(sentence.toUpperCase());

//trim()
console.log("sente          nce".trim());

//valueOf()
console.log(sentence.valueOf());