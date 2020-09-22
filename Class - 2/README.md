# Lesson 2 - Node.js Crash Course


At this lesson I learned 3 main things and those are:
- Importing and Exporting modules
- Working with file system
- Input Stream and Output Stream


## Importing and Exporting modules

Basically Importating and Exporting variables, functions or objects or other kind of stuff, can be done in one separate file and after the function or object or even variables are already done on a file we can import it from other file.
<br>
Exporting operation is when you're giving the opportunity to other files import data from the file that we are exporting the data.
<br>
Example:
<br>

### Exporting
file name: math_functions.js
```
function fact(number){
    let product = 1;

    for(let i = 2; i <= number; i++){
        product *= i;
    }
    return product
}

module.exports = {fact: fact}
```


### Importing
<br>
file name: main_program.js

```
const { fact } = require('./math_functions')

let result = fact(3)

console.log(result) // Output:  6
```


**Explaining:** At the first file name math_functions.js there I declared a function named fact that his main purpose is compute the factorial of a number, but as you can see we are not using it at it's own file, because we don't use it there we want use it in onether file called main_program.js at this file is where we want that the things happen, and for this happen or for we get access to the function that was declared at the previous file we need to export this function, making it avaible to be used in other parts of the program and to happen this we really need to export, and to export a function, object, array, variable or other stuff we need to type:

**module.exports = { fact: fact }**

module.exports -> basically means that we are exporting something.
{fact: fact} -> means the object that we are exporting!
<br>
But it comes out a question, what object?
Yeah it's one of the ways that we can do this, now we are using this syntax to make our lifes easier and more confortable because while we are exporting a object we can export a big amount of stuff using the object caracteristics! Because at a object we can have functions, arrays, onether objects, variables and all of them represented by a key value, and when we access this key value we get access to the value that is stored at this key associated with the object, meaning that when we call object.property we are asking for the value of it, and if it's a function we are asking to function and that's why we are using objects, to easy export data, functions or even other objects.
<br>
At the main file name main_program.js we are only requiring exactily the function fact from math_functions.js and we are using this by this line: `const { fact } = require('./math_functions')`
<br>
At `const { fact }` -> we are saying to the node that from the object that we are importing we want exactily the prop fact and this prop fact is a function and in other words we are asking for our function defined before!
<br>
At `require('./math_functions')` -> we are requiring every single thing that are being exported at the math_functions.js, note that we don't need to specify the extension .js at the end because node already understand! And note one more thing is that require will also execute the all code of math_functions.js


## Working with file system
<br>
Like we were importing data, functions from modules and stuff like that, when we need to work with the file system we also need to import a module named **fs** meaning f -> file and s -> system, this module is node built-in and you don't need to create it by yourself.

When we are working with file system we need to have a lot of attention because we can modify it's own structure and cause problems, cause of that, please pay attention on the commands that you type.

Those vars allow us to know where we are executing and what file we are executing

## Creating & Removing folder

### Creating Folder

```
const fs = require('fs')
const folderName = './Hello World'

fs.mkdir(folderName, (err)=>{
    if(err){
        console.log('One error occurred!\n' + err.message)
    } else {
        console.log('Folder ' + folderName + ' created!')
    }
})
```

mkdir method basically give to us the oportunity to create a folder it extends from (make directory), inside of this method we gave 2 arguments, 1º Folder name and 2º A callback function, why?

Folder name especify the relative path where the folder will be created and the name of the folder, it means that when we are creating a folder we need to specify where it will be created and the folder name as the last thing inside the folderName const.
<br>
`./` -> It basically means that we creating the folder at the current location
`Hello World` -> Folder name.

We insert a callback function, that will return to us a message that we'll alert us if the folder was created or no!

### Deleting Folder

```
const fs = require('fs')
const folderName = './Hello World'

fs.rmdirSync(folderName, (err)=>{
    if(err){
        console.log('An error occurred while deleting the folder: ' + folderName)
    } else {
        console.log('Folder ' + folderName + ' was sucessufly delected')
    }
})
```

At this example we basicaly did the same thing that we did at the previous code, while we was creating the folder, now we are only deleting the folder created, at the last example.

Why the method is called **rmdirSync**