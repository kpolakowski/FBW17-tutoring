const Person = require("./person");

class Student extends Person{
    constructor(name,age,school,course){
        super(name,age) // new Person("Karol",31)
        //const person = new Person(name,age);
        this.school = school;
        this.course = course;
        this.printStudentInfo = function(){
            //console.log(person)
            console.log(`${this.name} is ${this.age}, he goes to ${this.school} and is taking ${course} course`)
        }
    }
    
}

module.exports = Student;