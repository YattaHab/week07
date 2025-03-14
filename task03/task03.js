
let start = 10;
let end = 100;
let exclude = 40;

for( let i = start ; i <= end ; i+=10){
    if (i == exclude){
        continue;
    }
    console.log(i);
}
console.log("break");

let start1 = 10;
let end1 = 0;
let stop = 3;

for ( let i = start1 ; i >= stop ; i--){
    if (i < 10){
        console.log("0" + i);
    } else {
        console.log(i.toString());
    }
}
// console.log("break");

let start2 = 1;
let end2 = 6;
let breaker = 2;

for( let i = start2 ; i <= end2 ; i++){
    console.log(i); 
    for ( let j = breaker ; j <= breaker*2 ; j*=breaker){
        console.log( "--" + j);
    }
}
console.log("break");

let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    index -= jump; 
    if ( index < jump * jump){
        break;
    }
}
console.log("break");


let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let num= 0;

for( let i = 0 ; i < friends.length ; i++) {
    // console.log( i+1 + "=>"+friends[i]);
   
    if (friends[i].toLowerCase().startsWith(letter)){
        continue;
    } 
    num++
    console.log(`${num} => ${friends[i]}`);
}
console.log("break");

let start3 = 0;
let swappedName = "elZerO";
for( let i = start3 ; i < swappedName.length; i++ ){
    if ( swappedName[i] === swappedName[i].toUpperCase()){
       console.log(swappedName[i].toLowerCase());
    }else {
        console.log(swappedName[i].toUpperCase())
    }
}
console.log("break");

let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for ( let i = 1; i < mix.length ; i++ ){
    if ( typeof mix[i] == "string"){
        continue;
    } 
     console.log(mix[i]);
}
console.log("break");


// let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let i = 0;
// let count = 0;

// while( i < friends2.length) {
//     if ( typeof friends2[i] !== "string" || friends2[i].startsWith("A") ){
//         i++;
//         continue;
//     }

//     counter++;
//     console.log(`${counter} => ${friends2[i]}`);
//     i++;
// }

let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let i = 0; 
let count = 0; 

while (i < friends2.length) {
    if (typeof friends2[i] !== "string" || friends2[i].startsWith("A")) {
        i++;
        continue;
    }

    count++;
    console.log(`${count} => ${friends2[i]}`);
    i++;
}
