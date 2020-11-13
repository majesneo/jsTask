// written in procedure style,subroutines

// const welcome = person => {
//     const name = person.name
//     const first = name.charAt(0).toUpperCase()
//     const rest = name.slice(1);
//     const capitalized = first + rest
//     console.log(`Ave + ${capitalized}`)
// }
// welcome({name: 'marcus'})


//
// written in function style
//
// const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
// const welcome = ({name}) => `Ave, ${capitalize(name)}`;
// console.log(welcome({name: 'marcus'}));
//
//


//Mixed solution

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

const welcome = person => {
    const {name} = person
    const capitalized = capitalize(name)
    console.log(`Ave, ${capitalized}`)
}
welcome({name: 'marcus'})