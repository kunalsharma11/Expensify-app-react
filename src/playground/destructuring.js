//object destructuring

const person = {
    name: 'kunal',
    age: 23,
    location: {
        city: 'Montreal',
        temp: 2
    }
};
const { name = 'Ranjit', age } = person;  // if there is no person name defined

console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;

// if(city && temperature){
//     console.log(`It is ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan holiday',
//     publisher: {
//        // name: 'penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//Array destructuring

const address = ['1839 Ave Lincoln', 'Montreal', 'Quebec', 'H3h 1H5'];

const [, city, state] = address;

console.log(`${name} You are in ${city} ${state}`);

const item= ['coffee(iced)', '$2.00', '3.50', '4.25'];

const [drink, , medPrice,] = item;
console.log(`A medium ${drink} costs $${medPrice}`);