const git = (require("simple-git"))();
const fs = require("fs");
const moment = require("moment");

const logic = async a => {
    const date = moment().format();
    fs.writeFile("test.txt", moment().format() , ()=>{
       git.add(".").commit(date);  
    });
}


logic()