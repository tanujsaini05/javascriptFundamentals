console.log("let's work with nested array");
let arr = ["Shyam ju","Shyama ju","Lala","buggo","Mma"]
let arr2 = ["maharani Bala sundari","Maa Amba","Maa jagdamba","Maa kali","Maha mmaya Vaishno devi ji"]
// arr.push(arr2)
// console.log(arr[5][4]);


// use concat

// arr.concat(arr2);
// console.log(arr.concat(arr2)); // forms a new array 
// console.log(Array.from("Thakur"));
// console.log("Thakurji".split(''));

let copy = arr
copy[0] =1
console.log(arr); // copy changes original

let allinone = [...arr,...arr2]   //all element to one new array
console.log(allinone);

let a = [1,2,[3,4],[4,[5]]]
console.log(a.flat(1));

// Interesting Interview Case:

// If you try Array.from({name: "hitesh"}) (an object), it returns an empty array [] because it doesn't know whether to make an array of the keys or the values. You have to specify that. [13:07]
console.log(Array.of(allinone,a))