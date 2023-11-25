function sumOfTriple(x, y){
    //check if the two values are same
    if(x ===y){
        return 3 * (x + y);
    }else{
        //return sum of the two values
        return x + y;
    }
}

let num1 =5;
let num2 =5;

let result = sumOfTriple(num1, num2);
console.log(result);