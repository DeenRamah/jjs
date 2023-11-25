function rotateString(str){
    //convert the string to an array of characters
    let chars = str.split('');

    //function to rotate string to right

    function rotateRight(arr){
        arr.unshift(arr.pop());
        return arr.join('');
    }
    //rotate the string 10 times
    for(let i=0; i<10; i++){
        str = rotateRight(chars);
        console.log(str);
    }
}

//initial string

let initialString = 'w3resource';

//Rotate the string
rotateString(initialString);