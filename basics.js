'use strict';

const SALUTATION = 'Ave';

const COLOR = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white'
]


const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;

const colorize = name => {
    let res = '';
    const letters = name.split('');
    console.log(letters)
    let color = 1;
    for (const letter of letters) {
        res += colorer(letter, color++);
        if (color > COLOR.length) color = 1;
    }
    return res
}

const greetings = name => name.includes('Augustus') ? `${SALUTATION}, ${colorize(name)}` : `Hello, ${name}`

const fullName = 'Marcus Aurelius Antonius Augustus';
console.log(greetings(fullName))

const shortName = 'Marcus Aurelius'
console.log(greetings(shortName))
