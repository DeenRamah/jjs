//check if the year is leap year
function isleapYear(year){
    //check if the year is divisible be 4
    if(year % 4 == 0){
        //check if divisible by 100 or 400
        if(year % 100 !==0 ||(year % 400 == 0)){
            return true;//its leap
        }else{
            return false;//its not leap
        }
      }else{
        return false;//its not leap
      }
}
//example usage
let yearToCheck = 2024;
if(isleapYear(yearToCheck)){
    console.log(`${yearToCheck} is a leap year.`);
}else{
    console.log(`${yearToCheck} is not a leap year.`)
}