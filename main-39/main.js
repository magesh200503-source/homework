// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
    name: "magesh",
    age: 21,
    city: "Москва",
    hobby: "Программирование"
};

console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(obj) {
    if (obj == 0) {
        return true
    } else false
}

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

let task = {
    title: "Домашка",
    description: "отправить домашку 39 сегодня перед сном",
    isCompleted: false,
}
const cloneAndModify = (object, modifications) => ({ ...object, ...modifications});
newTask = cloneAndModify(task, {isCompleted: true})
for (let i in newTask) {
    console.log(task[i])
}
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Без понятия как это можно сделать😐
