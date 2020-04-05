const git = (require("simple-git"))();
const fs = require("fs");
const moment = require("moment");


const logic = async (x , y) => {
     
    const date = moment().subtract(1 , 'd').format();
    fs.writeFile("test.txt", moment().format() , ()=>{
       git.add(".").commit(date , {'--date' : date}).push();  
    });
}

logic()
