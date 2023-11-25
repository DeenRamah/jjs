function  AbsNum (num){
    const refNum = 19;
     const newNum = Math.abs(num - refNum);

     if(num < refNum){
        return 3 * newNum;
     }else{
        return newNum;
     }
}

let testNum = 26;
let result = AbsNum(testNum);
console.log(`Result:${result}`);
