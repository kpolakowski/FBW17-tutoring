// SETTING UP YOUR LOCAL DATABASE
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

// INITIAL VALUES FOR DATABASE
db.defaults({ students : [] }).write()

//let students = "students"
let users = db.get("students");

// DESTRUCTURING
const [ action = "read", userName, userNameNew ] = process.argv.slice(2)
/* 
CLASSICAL WAY
const args = process.argv.slice(2);
const action = args[0] || "read";
const userName = args[1]
const userNameNew = args[2]
------------------------- 
console.log(process.argv.slice(2))
console.log(action, userName)
*/
if(action==="read"){
    // PRINT USERS TO THE CONSOLE
    console.log(users.value().sort((personA,personB)=>{
        if(personA.name>personB.name){
            return 1;
        } else if(personA.name<personB.name){
            return -1;
        } else return 0;
    }))
} else if(action==="create"){
    //CREATE USER AND ADD TO THE DB
    if(!userName){
        console.log("Please provide a name");
        return;
    }
    users.push({ name: userName }).write();
} else if(action==="update"){
    //UPDATE USER IN DB
    if(!userName || !userNameNew){
        console.log("Please provide a valid data to update");
        return;
    }
    users
        .find({ name : userName })
        .assign({ name: userNameNew})
        .write()
} else if(action==="delete"){
    //DELETE USER FROM DB
    if(!userName){
        console.log("Who do you want to delete? Correct your data");
        return;
    }
    users
        .remove({ name: userName })
        .write()
} else if(action==="search"){
    //SEARCH USER IN DB
    if(!userName){
        console.log("Please provide a name to search");
        return;
    }
    console.log(users
        .find({ name: userName })
        .value())
    
} else {
    //HANDLE INCORRECT DATA
    console.log("Please correct the input data.");
}