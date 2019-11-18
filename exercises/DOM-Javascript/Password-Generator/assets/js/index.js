const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';

const generatePassword = (length,mixedCase) => {
    let password = "";
    for(let i = 0; i < length; i++){
        const letter = charset[Math.floor(Math.random()*charset.length)]
        if(mixedCase){
            password += (i%3===2) ? letter.toLocaleUpperCase() : letter;
        } else {
            password += letter;
        }
        
    }
    return password
}

const result = document.querySelector("#password");
const length = document.querySelector("#length");
const mixedCase = document.querySelector("#mixedCase");

document.querySelector("#generate").addEventListener("click",(e)=>{
    result.value = generatePassword(length.value,mixedCase.checked)
})

result.value = generatePassword(length.value,mixedCase.checked)