let principal = 2000; 
let rate = 5;         
let time = 3;         

if (principal < 0 || rate < 0 || time < 0) {
    console.log("Error: All inputs must be positive numbers.");
} else {
    let simpleInterest = (principal * rate * time) / 100;
    console.log(`Simple Interest: Rs. ${simpleInterest}`);
}
