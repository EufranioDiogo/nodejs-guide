//const peopleArray = require('./people')

//console.log(peopleArray, "It's an empty object")
//console.log(people, "It rease a Error telling that people is undefined")

//After exporting people at the people.js we already can have access to it

//console.log(peopleArray, 'Module.js file')

//I'll get an object with different propeties and each one of them are the arrays or values that we are exporting from the module(people)
/*let content = require('./people')

console.log(content)
console.log('People: ', content.people)
console.log('Ages: ', content.ages)
*/

// Another common way to get data from a module is:
/*
const { people, ages } = require('./people')

console.log('People: ', people)
console.log('Ages: ', ages)
*/

// Cool thing is coming os!

/*
const os = require('os')

/*
os.cpus().forEach(cpu => {
    console.log(`Model: ${cpu.model}, Speed: ${cpu.speed}`)
})*/


//console.log(os.platform(), os.homedir())*/

// Another cool thing file system
const fs = require('fs')
const { homedir } = require('os')

// reading files(asynchronous function)
/*fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        file = data.toString();

        console.log(typeof file)
    }
})

console.log('Reading the file')
*/

// writing files
/*
fs.writeFile('./docs/blog2.txt', 'It really doesn\'t matter', (err)=>{
    if(err){
        console.log('There\'s an error at process of creating the file')
        console.log(err.toString())
    } else {
        console.log('New file created')
    }
})*/

// directories
/*
const { homedir } = require('os')
const dirName = '/New Folder Created By nodejs/New Dir'

if (!fs.existsSync(homedir() + dirName)) {

    fs.mkdir(homedir() + dirName, (err) => {
        if (err) {
            console.log('There was not possible to create the folder we\'re sorry about that')
            console.log(err)
        } else {
            console.log('Folder created')
        }
    })
} else {
    console.log('The folder ' + dirName + 'already exist')
}
*/


// deleting folder
/*
const dirName = '/New Folder Created By nodejs/New Dir'
if (fs.existsSync(homedir() + dirName)) {
    fs.rmdirSync(homedir() + dirName, (err) => {
        if (err) {
            console.log('error')
        } else {
            console.log('Folder deleted')
        }

    })
} else {
    console.log('The file doesn\'t exist!')
}
*/

// deleting file

/*
if(!fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme1.txt', (err)=>{
        if(err){
            console.log('An error occured')
            console.log(err)
        } else {
            console.log('File succefully deleted!')
        }
    })
}*/


fs.rmdirSync('./folder', {recursive: true}, (err)=>{
    if(err){
        console.log('Erro was delected!\nErro: ' + err.message)
    } else {
        console.log('Folder deleted')
    }
})