// const person: {name: string, age:number} = {
//     name: 'Maximilian',
//     age: 30
// }
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

// let favoriteActivities: (string | number)[];
// favoriteActivities = ['sports', 20];
let favoriteActivities: string[];
favoriteActivities = ['sports'];

for(const hobby of person.hobbies){
    console.log('hobby' , hobby);
}
console.log('person' , person.name);