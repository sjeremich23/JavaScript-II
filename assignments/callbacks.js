// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

// Challenge 1
// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
	return cb(arr.length);
}

getLength(items, function(getNumber) {
	return console.log(`The length of the array is: ${getNumber}`);
});

// ********************************

// Challenge 2
// last passes the last item of the array into the callback.

function lastItem(arr, cb) {
	return cb(arr[arr.length - 1]);
}

lastItem(items, function(last) {
	return console.log(`The last item is: ${last}`);
});

// Challenge 3
// sumNums adds two numbers (x, y) and passes the result to the callback.

function sumNums(x, y, cb) {
	return cb(x, y);
}

function add(num1, num2) {
	let result = num1 + num2;
	return `The sum is: ${result}`;
}

console.log(sumNums(1, 2, add));

// ********************************
// Challenge 4
// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
	return cb(x, y);
}

function multiply(num1, num2) {
	let result = num1 * num2;
	return `The product is: ${result}`;
}

console.log(multiplyNums(2, 3, multiply));

// ********************************

// Challenge 5
// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
	return cb(item, list);
}

function showResult(item, list) {
	const result = list.includes(item);
	return `the result is: ${result}`;
}

console.log(contains("yo-yo", items, showResult));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
	// removeDuplicates removes all duplicate values from the given array.
	// Pass the duplicate free array to the callback function.
	// Do not mutate the original array.
	return cb(array);
}

function backToArray(array) {
	const removeDupe = new Set(array);
	const backToArray = [...removeDupe];
	return backToArray;
}

console.log(removeDuplicates(items, backToArray));
