
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.length = num;
console.log( myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends.length = myFriends.length - 1;
console.log( myFriends ); // ["Ahmed", "Elham", "Osama"];
console.log("break");


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]
console.log("break");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
console.log("break");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log( words[2][0].slice(2).toUpperCase()); // ZERO
console.log("break");


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

//Write 3 Solutions

console.log(haystack = haystack.concat(needle));

haystack.push(needle);
console.log(haystack);

haystack.unshift(needle);
console.log(haystack);
console.log("break");


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().slice(4).join("");

console.log(allArrs); // fxy
