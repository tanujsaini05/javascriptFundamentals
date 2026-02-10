// 1st way to declare objects

const jsUser = {
name: "Thakur",
Professtion: "World Management"
}

//2nd way to declare objects

let anObj = Object.create(null)
anObj.key = "Naam"
anObj['Naam'] = "Buggo"

// one way to access objects

console.log(anObj.Naam);

//2nd way to access objects(Preffered when key have whitespace)

console.log(jsUser["Professtion"]);

// Interview Question
// Task: Create a Symbol and use it as a key in an object.

const mySum = Symbol('key1')
anObj.key = mySum
anObj[mySum] = "Done"
console.log(anObj[mySum]);


//treat a function as an key 

jsUser.greeting = function (){
    console.log("Bolo Jai jai Shree RadheShyam");   // Called expression Function  
    
}

console.log(jsUser["greeting"]);

