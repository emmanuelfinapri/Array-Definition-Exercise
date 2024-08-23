//Question 1
// An array is a special variable, which can hold more than one value
// Arrays in JavaScript can hold different types of data, including strings, numbers, objects, and even other arrays.

//Question 2
// a. push() - Adds one or more elements to the end of an array.
// b. includes() - Checks if an array contains a certain element, returning true or false.
// c. indexOf() - Returns the first index at which a given element can be found, or -1 if it is not present.
// d. splice() - Removes elements from an array at a specified index.
// e. pop() - Removes the last element from an array and returns it.

//Question 3
// Dummy array data
const students = ["Emmanuel", "Daniel", "John", "Philip", "Maxwell"];

// Using push() method to add another student to the end of the array
const newStudent = "Johnathan"
students.push(newStudent);
console.log(`${newStudent} was added to the students array`); // Output: Johnathan was added to the students array

// Using includes() method to check if a student name exists in the array
const name = "John"
const hasName = students.includes(name);
if(hasName){
  console.log(`${name} exists in the students Array`); // Output: John exists in the students Array
}
else{
  console.log(`${name} does not exist in the students Array`); 
}

// Using indexOf() method to find the index of a specific student
const a_student = "Emmanuel"
const index = students.indexOf(a_student);
console.log(`${a_student} is in index position ${index} of the Array`); // Output: Emmanuel is in index position 0 of the Array

// Using splice() method to remove a student at a specific index
students.splice(index, 1); // Removes the element at the index
console.log(`${a_student} has been removed from the array, the array is now ${students}`); // Output: [Emmanuel has been removed from the array, the array is now Daniel,John,Philip,Maxwell,Johnathan

// Using pop() method to remove the last element from the array
console.log('Before pop method was used:', students); // Output: Before pop method was used: [ 'Daniel', 'John', 'Philip', 'Maxwell', 'Johnathan' ]
const lastName = students.pop();
console.log('After Pop method was used:', students); // Output: [ 'Daniel', 'John', 'Philip', 'Maxwell' ]
console.log(`${lastName} was removed from the array`) // Output: Johnathan was removed from the array
