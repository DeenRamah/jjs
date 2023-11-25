function cRange(val1, val2, val3){
    //check if a val is in range
    function isInRange(num){
        return num >= 50 && num <= 99;
    }

    if(isInRange(val1) || isInRange(val2) || isInRange(val3)){
        return true;
    }else{
        return false;
    }
}

let num1 = 45;
let num2 =75;
let num3 =100;

let result = cRange(num1, num2, num3);
console.log(result);