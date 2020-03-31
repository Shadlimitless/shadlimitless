//Object destructuring in a function
const func=(firstName, lastName, age)=>{
    return {
        firstName,
        lastName,
        age
    }
}

console.log(func('Shady', 'Limz',29));