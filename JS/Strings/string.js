// to create a string there are 2 ways

// 1st way
const str = "Naveen"
console.log(str);
// 2nd way
const str1 = new String("Naveen")
console.log(str1);

const prevString = str
console.log(prevString);

const tickString = `Narendra`
console.log(tickString);

const greet = `Hello ${tickString}`
console.log(greet); 

// joining two variables using template literals
const name1 = "hello"
const name2 = "world"
const name3 = `${name1} ${name2}` // using templeate literals to concat
console.log(name3);
console.log(name1 + "," + name2); // normal way of concatenating two variables


// using varibale in a expression
const add = " batting is awesome"
const adding = `Naveen's ${add}`
console.log(adding);

// Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:

const newline = `naveen is living in nellore
and he got job on product based company`;
console.log(newline);

const newline1 = "naveen is living in nellore\nand he got job on product based company"
console.log(newline1);

// number vs strings

const line = "ABD"
const jerseyNbr = 17
console.log(line + jerseyNbr); 
console.log(typeof jerseyNbr)

const convert = String(jerseyNbr)
console.log(typeof convert);
const covertLine = Number(line)
console.log(typeof covertLine);
