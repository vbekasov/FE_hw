
for (let i = 0; i <= 10; i+= 2) {
    console.log(`Task one : ${i}`)
}

console.log(``);

for (let i = 55; i >= 20; i--) {
    console.log(`Task two : ${i}`);
}

console.log(``);

const numbers = [3, 5, 11, 2, 8, 1, 6];
for (i in numbers) {
    console.log(`Task three : ${numbers[i]}`);
}

let numbers_squared = [];
numbers.forEach((element) => {
    numbers_squared.push(Math.pow(element, 2));
});
console.log(numbers_squared);

const last_elem = numbers_squared[numbers_squared.length - 1];
console.log(`Last elem : ${last_elem}`);

const user = { first_name: 'Ivan', last_name: 'Ivanov', age: 20, salary: 500};
console.log(`User\`s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`);
