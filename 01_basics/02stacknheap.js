let site = "Tanujsaini.com"
let channel = site
// console.log(site);
// console.log(channel);


channel = "Sainisab254319@gmail.com"
// console.log(site);
// console.log(channel);


// primitive datatype uses stack memory makes a copy don't change in main memory 


let userOne = {
    Name: "Tanuj",
    age: '22'
}
let userTwo = userOne;
console.log(userOne.Name);
console.log(userTwo.Name);


userTwo.Name = 'Ram Ram'


console.log(userOne.Name);
console.log(userTwo.Name);


// non primitive data types uses HEAP for data storage 
// stores reference 
// change in main memory
