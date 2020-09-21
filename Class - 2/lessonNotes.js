/* My example

const quantVowels = (name) => {
    let vogal = ''
    let quantVogais = 0

    for (let i = 0; i < name.length; i++) {
        vogal = name[i].toLowerCase()

        if (vogal == 'a' || vogal == 'e' || vogal == 'i' || vogal == 'o' || vogal == 'u') {
            quantVogais += 1
        }
    }
    return quantVogais;
}

const name = 'Eufránio Diogo'
let quantVogais = quantVowels(name)

if (quantVogais > 0) {
    console.log(`In your name: ${name} there is ${quantVogais} vowels`)
} else {
    console.log(`In your name: ${name} encrible don't has vowels! How could it be possible? Are you a alien?`)
}*/


// Netninja course

//Node Global Object(like window object inside the browser)

// We don't have the DOM model at the node, but it's absolutely fine

