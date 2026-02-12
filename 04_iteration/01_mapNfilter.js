let map = new Map
map.set("Kajukatli","Hanuman ji")
map.set("Laddu","Shayam ju")
map.set("Buggo","Lala")

console.log(map);
//// it is for iterables only
for (const [key,value] of map) {
    console.log(key," :- ",value);
    
    
}

const myob = {
    js: "javascript",
    cpp: "C++",
    py: "Python"
}

for (const key in myob) {
   console.log(key ," :- ",myob[key]);
   
    
}
