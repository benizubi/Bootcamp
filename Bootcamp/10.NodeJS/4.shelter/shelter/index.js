// require a directory/
const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')

const allCats = [blue, sadie, janet]
console.log(allCats);

// so i have only created this files by right clicking on the shelter folder so i can create a file that connects the 3 pages
// so all the information could be passed to one so we can run it on node.js
// so whenver I am enquiring a directory, like shelter, it's going to look for the index file as its the main file that connects everything for us to run.

exports = allCats;