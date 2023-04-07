const fs = require("fs")

// let files = fs.readdirSync("./");
fs.readdir("./", function(err, files){
    if(err){
        throw err;
    }
    console.log(files);
});

// console.log(files);
console.log("reading files...");