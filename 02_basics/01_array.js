console.log("Let's start array operations");

// we will perform push, pop, shift, unshift, slice and splice

let arr =[10,20,30,40,50,60,70]
// console.log(`pushing to array ${arr.push(80)}`);
// console.log(`poping from the array ${arr.pop()}`);

// console.log(arr.unshift(80,90));     // this function add the element to array at the start and return its length
// console.log(arr.shift());            //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// console.log(arr);
// console.log(arr.slice(-5,-1));        //return copy 
console.log(arr.splice(1,2,1,2));
console.log(arr);
console.log(arr.join());        // join the complete array and result a string
console.log("Hello tanuj is here".split(' ').join(' '))

// remark array operations work if array is the const
