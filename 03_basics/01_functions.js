function mySum(x,y) {
    return x+y;
}
console.log(mySum(1,2));

function loginUserMessage(username = "sam"){     //   default parameter
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Tanuj"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
