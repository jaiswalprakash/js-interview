/*
The arr.splice method is a swiss army knife for arrays. It can do everything: 
insert, remove and replace elements.

The syntax is: arr.splice(startindex,numberofelement(optional),replace(optional))

*/

let arry = ["i", "am", "prakash", "i", "am", "software", "engineer"];

let removedItem = arry.splice(6, 1, "developer");

console.log(arry); // [ 'i', 'am', 'prakash', 'i', 'am', 'software', 'developer' ]
console.log(removedItem); // [ 'engineer' ]

let removedata = arry.splice(3);
console.log(arry); // [ 'i', 'am', 'prakash']
console.log(removedata); // [ 'i', 'am', 'prakash']

//negative indexes are allowed. They specify the position from the end of the array, like here:

let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

console.log(arr); // [ 1, 2, 3, 4, 5 ]

/* 

The syntax is:

arr.slice([start], [end])
It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

For instance:



*/

let stringArray = ["t", "e", "s", "t"];

console.log(stringArray.slice(1, 3)); // e,s (copy from 1 to 3)

console.log(stringArray.slice(-2)); // s,t (copy from -2 till the end)

/*
DIFFERENCE BETWEEN SPLICE AND SLICE ARRAY METHOD

1. The splice() method returns the removed item(s) in 
    an array and slice() method returns the selected element(s) in an array, 
    as a new array object.

2. The splice() method changes the original array and 
    slice() method doesn’t change the original array.

3. The splice() method can take n number of arguments:

*/
