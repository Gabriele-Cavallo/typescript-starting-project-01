// const person: {name: string, age:number} = {
//     name: 'Maximilian',
//     age: 30
// }
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// let favoriteActivities: (string | number)[];
// favoriteActivities = ['sports', 20];
let favoriteActivities: string[];
favoriteActivities = ['sports'];

for(const hobby of person.hobbies){
    console.log('hobby' , hobby);
}
console.log('person' , person.name);