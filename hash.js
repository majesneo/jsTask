'use strict';

const welcome = person => {
    console.log(`Ave, ${person.name} !`)
}

const persons = {
    marcus: {name: 'Marcus Aurelius'},
    mao: {name: 'Mao Aurelius'},
    rene: {name: 'Rene Aurelius'},
}

for (const name in persons) {
    const person = persons[name]
    welcome(person)
}