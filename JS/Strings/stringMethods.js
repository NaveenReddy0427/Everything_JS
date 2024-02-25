// string methods

// length 
const method1 = "Naveen";
console.log(method1.length) // 6
console.log(method1[2]); // v

// u can see when console.log(method1[7]), we will not get the n character because browser counts from 0 
console.log(method1[6]); // undefined
console.log(method1[5]) // n

// includes, stratsWith, endswith, indexOf, lastIndexOf
const method2 = "mozilla"
console.log(method2.includes("zilla"));  // true
console.log(method2.includes("Nav")) // false

console.log(method2.startsWith("mo")) // true
console.log(method2.startsWith("zo")) // false

console.log(method2.endsWith("lla")) // false
console.log(method2.endsWith("nav")) // false

const tagline = "MDN - Resources for developers, by developers and developers";
const firstOccurrence = tagline.indexOf("developers"); 
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1); 
const thirdOccurrence = tagline.indexOf("developers", secondOccurrence + 1); 
console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
console.log(thirdOccurrence); // 50
console.log(tagline.indexOf('x')) // -1

const tagline2 = "MDN - Resources for developers, by developers and developers";
console.log(tagline2.lastIndexOf("developers")) // 50
console.log(tagline2.lastIndexOf("developers", 45)) // 35
console.log(tagline2.lastIndexOf("developers", 30)); // 20


// slice
const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(4, 11)
const str3 = str1.slice(4, -12)
const str4 = str1.slice(-19, -12)
console.log(str2) // morning 
console.log(str3) // morning
console.log(str4) // morning 


//
 