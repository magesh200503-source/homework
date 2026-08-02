// Задача 1

const number = +prompt("Введите число", 0);
const evenNumber = !isNaN(number) ? (number % 2 ? "Ваше Число нечётное!" : "Ваше Число чётное!") : "Это не Число";
alert(evenNumber)
// Задача 2

// Релиз 1

/* const age = 66;
const discount = age < 18 ? "скидка 10%" : age >= 18 && age <= 65 ? "скидка 20%" : "скидка 30%";
console.log(discount); */

// Релиз 2

const age = 66;
const discount = age < 18 ? "10%" : age >= 18 && age <= 65 ? "20%" : "30%";
console.log(`Скидка ${discount}`);

//Задача 3

const userName = prompt("Введите имя пользователя");
const password = prompt("Введите пароль");

/* if (userName == "admin" && password == 1234) {
    console.log("Доступ разрешен ✅");
} else {
    console.log("Доступ запрещен ❌");
} */

const secure =
    userName == "admin" && password == 1234
        ? "Доступ разрешен ✅"
        : "Доступ запрещен ❌";
alert(secure)
// Задача 4

const weight = +prompt("Вес посылки в килограммах:", 0);
if (weight <= 0 || isNaN(weight)) {
    alert("Некорректный вес посылки");
} else {
    const price = weight < 1 ? 5 : weight >= 1 && weight <= 5 ? 10 : 15;
    const type = prompt("Тип доставки");
    if (type == "Стандарт" || type == "стандарт") {
        alert(`Стоимость посылки ${price}$`)
    } else if (type == "Экспресс" || type == "экспресс"){
        alert(`Стоимость посылки ${price * 1.5}$`)
    } else if (type == "Премиум" || type == "премиум"){
        alert(`Стоимость посылки ${price * 2}$`)
    } else {
        alert('Неверный тип доставки')
    }
}

/* const price = weight < 1 ? 5 : weight >= 1 && weight <= 5 ? 10 : 15; */