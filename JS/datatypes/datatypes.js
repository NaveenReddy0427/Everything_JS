// primitive data types(stack)
/*
Numbers
string
boolean
Null
undefined
Symbol
Bigint


primitive data types are not reference to the same memory 
const name = "Naveen";
let username = name
if any value of the username changes then it will not reflect in name, because both variables are not reference to the same memonry which is stack memory.
*/

// references / objects(HEAP)

/*
Arrays
objects
functions

when one array/object/function reference to the same memory 
const obj1 = {}
let obj = obj1
if any value of the obj changes then the value will also change in obj1, because both objs are reference to the same memonry which is heap memory 
*/