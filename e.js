//rotating a word
function rotateString(str){
    for (let i =0; i<str.length; i++){
    //Extract the last character
    let lastChar = str.charAt(str.length - 1);

    //Remove the last character
    str = str.slice(0, -1);

    //Attach the last character to the front
    str = lastChar + str;

    console.log(str);
    }
}

//initial string

let initialString = 'w3resource';
//Rotate the string
rotateString(initialString);