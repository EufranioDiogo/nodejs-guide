const people = ['Shaun', 'Paul', 'Eric', 'Maria', 'Amanda']
const ages = [20, 25, 30, 35]


console.log(people)

// Exporting Data

// Now we are exporting the people array and when We require to it's array at other file, we gonna get the Array because it's being exported!
module.exports = {people, ages};
