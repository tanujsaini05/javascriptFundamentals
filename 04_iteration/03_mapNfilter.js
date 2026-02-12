const arr = [10,8,6,4,2]

// console.log(
//  arr.filter( (item) => item>4));      filter gives a new array


// console.log(arr.map((item)=>{
//     return item*10;
// }));


console.log(arr.reduce((acc,item) =>acc+item,0 ));

// const shoppingCart = [
//     { itemName: "js course", price: 2999 },
//     { itemName: "py course", price: 999 },
//     { itemName: "mobile dev course", price: 5999 }
// ]

// const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
// // The '0' at the end is the initial value of the accumulator

// console.log(priceToPay);
