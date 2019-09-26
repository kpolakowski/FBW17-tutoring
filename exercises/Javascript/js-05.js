let names = [
    "Karol",
    "Martina",
    "Robert",
    "Rene"
];

// WRITE A FUNCTION THAT TAKES ARRAY WITH NAMES AS ARGUMENT AND RETURNS COPY OF THAT ARRAY WITH NAMES IN UPPERCASE FORMAT, FOR EXAMPLE ["KAROL", "MARTINA", "ROBERT", "RENE"]
function uppercaseNames(arrayWithNames){
    return arrayWithNames.map(function(name){
        return name.toUpperCase();
    })
}
console.log(uppercaseNames(names));


// WRITE A FUNCTION THAT FIND THE LONGEST NAME IN ARRAY WITH REDUCE FUNCTION
let getLongestName = function(arrayOfNames){
    return arrayOfNames.reduce(function(total,current){

        // SHORTER VERSION, DOING THE SAME THING AS IF STATEMENT
        // return (current.length>total.length) ? current : total

        if(current.length>total.length){
            return current;
        } else {
            return total;
        }
    })
}
console.log(getLongestName(names));


// WRITE A FUNCTION THAT FILTERS THE NAMES HAVING SOME LETTER PROVIDED AS ARGUMENT
function getNameWithLetter(arrayOfNames,letter){
    return arrayOfNames.filter(function(name){
        return name.includes(letter);
    })
}
console.log(getNameWithLetter(names,"n"));


let students = [
    { name:"Karol", examResult:4 },
    { name:"John", examResult:3 },
    { name:"Sophie", examResult:2 },
    { name:"Robert", examResult:5 },
    { name:"Bruce", examResult:1 }
]

// WRITE A FUNCTION TAKING TWO ARGUMENTS (ARRAY WITH NAMES, SEARCHED NAME), AND RETURNS THE EXAM RESULT OF SEARCHED PERSON 
// FOR EXAMPLE getExamResult(students,"Karol") SHOULD RETURN 4
let getExamResult = function(arrayOfStudents,searchedName){
    let person = arrayOfStudents.filter(function(student){
        return student.name === searchedName;
    });
    console.log(person);
    let examResult = person[0].examResult;
    console.log(examResult);
    return examResult;

}
console.log(getExamResult(students,"Karol"))