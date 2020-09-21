// Part 1 - Node Global object
    //Showing the Global Object

    //console.log(global)

    /*global.setTimeout(()=>{
        console.log('Hello World after 3 seconds, async function')
    }, 3000)*/

    /* Seconds counter
    let secondsPassed = 0;
    const int = setInterval(()=>{
        console.log(++secondsPassed + ' second(s) Already passed since the begin of the function!')
        if(secondsPassed == 60){
            console.log('The seconds counter was stopped because it reached 60s and it was the goal')
            clearInterval(int)
        }
    }, 1000)
    */

    /* __dirname & __filename
    console.log(__dirname) // Show the absolute path of the folder that is the script running
    console.log(__filename) //Show to me the absolute path to reach the file that node is working in*/

// Part 2 Modules & Require

