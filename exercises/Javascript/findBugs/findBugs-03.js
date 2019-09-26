class Person {
  constructor(name) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(schoolName, className) {
    super();
    this[schoolName] = schoolName;
    className = className;
  }
}

let karol = new Student("Karol", 30, "DCI", "FBW-17");
console.log(karol);

/* I want to see in console object that look like this:

Student {
    name:"Karol",
    age:30,
    schoolName:"DCI",
    className:"FBW-17"
}

PLEASE FIX THE CODE, OTHERWISE WE ARE DOOMED

*/
