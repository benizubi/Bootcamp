const fs = require('fs');
// we always need to set the fs to require, otherwise the node.js app wont run on terminal as it doesn't exit without it
// console.log(fs)
// you can check all the functions fs contains by loging it out like done here

// asynchronous version:
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     // mkdir is creating a directry call dogs
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });
// the function runs conent last because its synchrnous and first checks to make the new directory then runs the function
// synchronous version: is the better option
// fs.mkdirSync('Cats')
// console.log("I COME AFTER MKDIR!!!")
// even though this the last line, but it runs first because its runnig seperatly so asynchronous

const folderName = process.argv[2] || 'Project'

try {
    fs.mkdirSync(folderName);
    // we creating a directory name 
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/app.css`)
} catch (e) {
    console.log('Big man try it again, that was wrong!!!')
    console.log(e);
}
// if you use synchronous you have to use try and catch and return an error just in case it doesnt run  as the asynchro does have a error method
// this is a synchronous way of creatings files

// kasiki@Obeybzs-MBP 2.Node % node boilerplate.js Portfolio   
//  if i run this on terminal it will create a Portfolio folder for me
