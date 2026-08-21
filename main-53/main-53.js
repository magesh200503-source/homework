// Задание 1.
// Дан массив пользователей:
const users = [
    { name: "Alex", age: 24, isAdmin: false },
    { name: "Bob", age: 13, isAdmin: false },
    { name: "John", age: 31, isAdmin: true },
    { name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
users.push(
    { name: "Ann", age: 19, isAdmin: false },
    { name: "Jack", age: 43, isAdmin: true },
);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(array) {
    let sum = 0;
    array.forEach((element) => {
        sum += element.age;
    });
    sum = sum / array.length;
    console.log(sum);
}
getUserAverageAge(users);

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(array) {
    let allUsers = [];
    array.forEach((element) => {
        allUsers.push(element.name);
    });
    console.log(allUsers);
}

getAllAdmins(users);
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
    if (n == undefined || n == 1) {
        return [arr[0]];
    } 

    if (n <= 0) {
        return [];
    } 
    let result = []
    for (let i = 0; i < n && i < arr.length; i++){
        result.push(arr[i])
    }
    return result
}

console.log(first(users, 3));
