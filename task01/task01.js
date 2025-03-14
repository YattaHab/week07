
console.log(100 == "100"); // true
console.log(typeof 100 === typeof 1000); // true
console.log(!!(110 && 100 && 10 && 20)); // true
console.log(-10 == "-10"); // true
console.log( !-50 >= "-40"); // true
console.log(!10 <= -"-40"); // true
console.log(!"10" <= 10); // true
console.log(!20 == false); // true
console.log("break");

let num1 = 10;
let num2 = 20;

console.log(!(num1 == num2)); // true
console.log(typeof num1 === typeof num2); // true
console.log(!num1 == !num2); // true
console.log(!!(num1 && num2)); // true
console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log("break");

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a > b || a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
console.log("break");

let num = 9;

if( num < 10 ) {
    console.log("00" + num)
}else if ( num > 10 && num < 100){
    console.log("0" + num)
}else {
    console.log(num)
}
console.log("break");

let num3 = 9;
let str = "9";
let str2 = "20";

if ( num3 == str) {
    console.log("{num1} Is The Same Value As {str}")
}
if ( num == str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}
if (num1 !== str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if ( typeof str === typeof srt2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}
console.log("break");

let num4 = 10;
let num5 = 30;
let num6 = "30";

if (num5 > num4 && typeof num6 === "string" && typeof num6 !== typeof num5) {
  console.log(`"${num5} Is Larger Than ${num4} And Type ${typeof num6} Not The Same Type As ${typeof num4}"`);
}

if (num5 > num4 && num5 == num6 && typeof num6 !== typeof num5) {
  console.log(`"${num5} Is Larger Than ${num4} And Value Is The Same As ${num6} And Type ${typeof num6} Not The Same Type As ${typeof num5}"`);
}

if (num6 != num4 && num6 !== num5 && typeof num6 !== typeof num5) {
  console.log(`"${num6} Value And Type Is Not The Same As ${num4} And Type Is Not The Same As ${num5}"`);
}
console.log("break");

let num0 = 41;
let num7 = 15;
let num8 = 10;
let num9 = 15;


if (num7 > num8) {
  console.log("True");
} else {
  console.log("False");
}

if (num7 > num8 && num7 < num0) {
  console.log("True");
} else {
  console.log("False");
}

if (num7 > num8 && num7 === num9) {
  console.log("True");
} else {
  console.log("False");
}

if ((num7 + num8) < num0) {
  console.log("True");
} else {
  console.log("False");
}

if ((num7 + num9) < num0) {
  console.log("True");
} else {
  console.log("False");
}

if ((num7 + num8 + num9) < num0) {
  console.log("True");
} else {
  console.log("False");
}

if (num0 - (num7 + num9) + num8 === 21) {
  console.log("True");
} else {
  console.log("False");
}
console.log("break");


let day = "Wednesday";

switch (day){
    case "Friday":
    case "Saturday":
    case "Sunday" :
        console.log("No Appointments Available");   
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");   
        break;
    case "Tuesday" :
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day")     
}

