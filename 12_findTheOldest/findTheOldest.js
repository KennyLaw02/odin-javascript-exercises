function calcAge(person) {
    // If person has no yearOfDeath property, they're alive
    let deathYear = person.yearOfDeath;
    if (!deathYear) {
        let currYear = new Date();
        deathYear = currYear.getFullYear();
    }
    return deathYear - person.yearOfBirth;
}
const findTheOldest = function(peopleList) {
    let oldest = peopleList.reduce((oldestPerson, person) => {
        return calcAge(oldestPerson) > calcAge(person) ? oldestPerson : person
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
