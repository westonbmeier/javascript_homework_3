// Elements for DOM
const displayEl = document.getElementById("display");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const specialEl = document.getElementById("special");
const numberEl = document.getElementById("number");
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("copy");

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

// Password generation on click event. 

generateEl.addEventListener('click', () => {
    
    const length = +lengthEl.value; 
    const upperChecked = uppercaseEl.checked;
    const lowerChecked = lowercaseEl.checked; 
    const symbolsChecked = specialEl.checked; 
    const numberChecked = numberEl.checked;  
    
    var usedChars = [upperChecked, lowerChecked, symbolsChecked, numberChecked].filter(Boolean);
    var charsPushed = usedChars.length; 

    var passwordArray=[]
    //calling the actual password generation from the function below
    generatePassword()
    
    //console.log(passwordArray)

    function generatePassword() {

        // For loop for the characters to be pushed. 
        for (i = 0; i < length; i += charsPushed){
        // Boolean statements for the check boxes and return statement if all boxes are not clicked. 
        // Uppercase letters check
        if (upperChecked === true){
        passwordArray.push(getRandomUpper()); 
        }
        // Lower case letters check
        if (lowerChecked === true){
            passwordArray.push(getRandomLower()); 
        }
        // Symbols check
        if (symbolsChecked === true){
            passwordArray.push(getRandomSymbol());
        } 
        // Number check
        if (numberChecked === true){
            passwordArray.push(getRandomNumber()); 
        }
        if (upperChecked === false && lowerChecked === false && symbolsChecked === false && numberChecked === false){
         // console.log(upperChecked, lowerChecked, numberChecked, symbolsChecked); 
         alert("Please select boxes and password length")   
         return; 
            
        }
        }
    }

// Displaying the generated password in the display element of the HTML. 
    var password = passwordArray.join("")
    displayEl.innerText=password; 
    }

// Creating an on click event to copy the generated password to the clipboard. 
    
)

copyEl.addEventListener("click", () =>{
    // Calling actual function to copy to clipboard. 
    copyToClipboard(); 
})
// Copy to clipboard function. 
function copyToClipboard(){
    var text = displayEl.innerText; 
    var temporary = document.createElement("textarea"); 
    document.body.appendChild(temporary); 
    temporary.value = text; 
    temporary.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(temporary);

}


//Generator functions. Using browser character set at www.net-comber/characterset.html

function  getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
}
console.log(getRandomUpper()); 
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower()); 
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber()); 
function getRandomSymbol() {
    const symbols = "!@#$%^&*()_-+=<>?{}.,";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(getRandomSymbol()); 

