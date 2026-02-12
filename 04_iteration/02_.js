// const coding = ["Python","Javascript","Java","C++"]

// coding.forEach( (item,idex,arr) => {console.log(item,idex,arr);
// })

const mycoding = [
    {
        langname:"javscript",
        langextension: ".js"
    },{
        langname:"Python",
        langextension: ".python"
    },{
        langname:"C++",
        langextension: ".cpp"
    },{
        langname:"java",
        langextension: ".java"
    },
]

mycoding.forEach((item) =>{console.log(item.langextension);
})