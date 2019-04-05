// File search
// if---error??
// how to read a file??

//1 BASIC fs

// variable name + module name

// const fs = require('fs');


// variable ----fs- module / method / async method (promise/ character encode)

    // const readMe= fs.readFileSync("README.md",'utf8');
       
    //     console.log(readMe);








// path

// const path = require('path');

// console.log('resolve : ' + path.resolve('index.js'));











//2

 // variable name + module name
// const fs = require('fs');

// const command = process.argv[2];

// variable ----fs- module / method / async method (promise/ character encode)
    // const readMe= fs.readFileSync(command,'utf8');
       
        // console.log(process.argv);       
    
 // code


 //3 **

//  const fs = require('fs')
//  const path = require('path')
 
//  const folder = process.argv[2]
//  const ext = '.md' + process.argv[3]
 
//  fs.readFile(folder, function (err, files) {
//    if (err) return console.error(err)
//    files.forEach(function (file) {
//      if (path.md(file) === ext) {
//        console.log(file)
//      }
//    })
//  })



//4

//  let command = []
//  process.argv.forEach(function (val) {
 
//  command.push(val);
//  console.log(command.push(val))
//  });


// const path= require('path');



//5

// resolve = require('path').resolve

// var pathObj= path.parse(__filename);
// console.log(pathObj)



