function telephoneCheck(str){
    //(XXX) XXX-XXX-XXXX
    let result =  RegExp(/([0-9]{3}) [0-9]{3}-[0-9]{3}-[0-9]{4}/).test(str); 
    console.log(result? result[0] : null);
    return result;
}

telephoneCheck("555-555-5555")
telephoneCheck("1 555-555-5555")
telephoneCheck("1 (555) 555-5555")
telephoneCheck("5555555555")
telephoneCheck("(555)555-5555")
telephoneCheck("1(555)555-5555")
telephoneCheck("1 555 555 5555")
telephoneCheck("1 456 789 4444")
