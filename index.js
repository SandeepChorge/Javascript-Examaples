const arr = [10, 20, 30, 40, 50, 10];
const hege = ['Cecilie', 'Lone'];
const stale = ['Emil', 'Tobias', 'Linus'];

console.log('This is ');

/*

//JOIN --- it returns the single string from array with spererator mentioned
console.log(stale.join(' and '));

//Array.isArray --- It validates if the mentioned element is an array or not
const b = 's';
console.log(Array.isArray(b));

//INCLUDES --- it returns true if mentioned element is present in array, its case sensitive
console.log(arr.includes(10));
console.log(stale.includes('emil'));

//REDUCE --- gives the single output from processing array elements
//GLIMMER NUMBER EXAMPLE WITH Reduce
let input = '1634';
const arr2 = Array.from(input);
const a = arr2.reduce(function(acc, current) {
  let b = current;
  acc = acc + b * b * b * b;
  return acc;
}, 0);
if (input == a) console.log(input, 'is a glimmer number');
else console.log(input, 'is not a glimmer number');


//Array.from --- It converts string into the character array
const ar = Array.from('1634');
console.log('Operation is ' + ar);

//lastIndexOf ---- it returns the last index of the specified element
console.log(arr.lastIndexOf(10));

//FINDINDEX --- its same as FIND but in this it returns index of that element if found else it returns -1
const findOp = arr.findIndex(checkFind);
function checkFind(item) {
  return item == 90;
}
console.log(findOp);

//FIND --- it checks for the values if present it returns the values and does not continue checking next values if not found till the end then it returns undefined
const findOp = arr.find(checkFind);
function checkFind(item) {
  return item == 20;
}
console.log(findOp);

//FILL ---- replaces array elements on specified position with mentioned element, if range not provided it replaces all the elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi",1,3);
console.log(fruits);

//FILTER --- filters the array elements with specified condition and returns filtered output
const op1 = arr.filter((x) => x>30);
console.log("Filter > 30 ",op1)

//CONCAT --- Concatenates multiple arrays
const children = arr.concat(hege,stale);
console.log("Find index ",children);

//COPYWITHIN --- copies the element at the specified index, replacing the existing entry   target, source
stale.copyWithin(1,0);
console.log(stale);

//EVERY --- it evaluates the function for every element in array and return true if all the elements satisfies condition
const everyTest = arr.every(checkAge);
function checkAge(age) {
  return age >= 10;
}
console.log(everyTest);
*/
