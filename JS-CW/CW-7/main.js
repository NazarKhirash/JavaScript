//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, graduationYear, maxSpeed, vEngine,) {
//     this.model = model;
//     this.producer = producer;
//     this.graduationYear = graduationYear;
//     this.maxSpeed = maxSpeed;
//     this.vEngine = vEngine;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`)
//     }
//     this.info = function () {
//         for (const [key, value] of Object.entries(this)) {
//             if (typeof key && typeof value != 'function') {
//                 console.log(`${key}-${value}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//          this.maxSpeed+=newSpeed;
//         console.log(`${this.maxSpeed}`)
//     }
//     this.changeYear = function (newValue){
//         this.graduationYear = newValue
//         console.log(`${this.graduationYear}`)
//     }
//
//     this.addDriver = function (driver, age, experienceYear){
//         this.driver=driver;
//         this.age = age;
//         this.experienceYeaar = experienceYear;
//         console.log(this)
//     }
//
// }
//
// let cars = [
//     car1 = new Car('BMW X5', 'Німеччина', 2015, 290, 3.0),
//     car2 = new Car('Volvo XC90', 'Швеція', 2017, 280, 2.8),
//     car3 = new Car('Mazda RX-8', 'Японія', 2018, 300, 3.2)
// ]
// // console.log(car1)
//
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(20)
// car1.changeYear(2010)
// car1.addDriver('OLeg',24,2)
//----------------------------------------------------------------------------------------------------------------------
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
//     constructor(model, producer, fromYear, maxSpeed, vEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.fromYear = fromYear;
//         this.maxSpeed = maxSpeed;
//         this.vEngine = vEngine;
//     }
//     drive(){
//         console.log(`Їдемо зі швидкістю - ${this.maxSpeed} км на годину`)
//     }
//     info(){
//         for (const [key,value] of Object.entries(this)) {
//             if (typeof key && typeof value !='function'){
//                 console.log(`${key} - ${value}`)
//             }
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed+=newSpeed
//         console.log(this)
//     }
//     changeYear(newValue){
//         this.fromYear = newValue
//         console.log(this)
//     }
//     addDriver(driver,age){
//         this.driver =driver;
//         this.age = age;
//         console.log(this)
//     }
// }
//
// let carArray=[
//     car1 = new Car('BMW X5', 'Німеччина', 2015, 290, 3.0),
//     car2 = new Car('Volvo XC90', 'Швеція', 2017, 280, 2.8),
//     car3 = new Car('Mazda RX-8', 'Японія', 2018, 300, 3.2)
// ]

// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(20)
// car1.changeYear(2011)
// car1.addDriver('Nazik',27)
//
// ---------------------------------------------------------------------------------------------------------------------
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// class Cinderella{
//     constructor(name, age, foodSize) {
//         this.name = name;
//         this.age = age;
//         this.foodSize = foodSize;
//     }
// }
//
// let cinderellaArr=[
//     cinderella1 = new Cinderella('Ira',21,39),
//     cinderella2 = new Cinderella('Vika',20,38),
//     cinderella3 = new Cinderella('Julia',31,39.5),
//     cinderella4 = new Cinderella('Oksana',19,37),
//     cinderella5 = new Cinderella('Vira',24,40),
//     cinderella6 = new Cinderella('Katia',22,35),
//     cinderella7 = new Cinderella('Tania',23,38.5),
//     cinderella8 = new Cinderella('Nina',40,45),
//     cinderella9 = new Cinderella('Kristina',29,37.5),
//     cinderella10 = new Cinderella('Nadia',25,41),
// ]
//
// class Prince extends Cinderella{
//     constructor(name,age,shoesSize) {
//         super(name,age);
//         this.shoesSize = shoesSize;
//     }
// }
// let prince = new Prince('Stepan',26,38);
//
// let searchCinderellaOfPrince = (cinderellaArr,prince)=>{
//     for (const cinderellaArrElement of cinderellaArr) {
//         if (cinderellaArrElement.foodSize===prince.shoesSize){
//             console.log(`Туфелька належить ${cinderellaArrElement.name}`)
//         }
//     }
// }
// searchCinderellaOfPrince(cinderellaArr,prince)
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// const searchCinderellaOfPrince1 = cinderellaArr.find(value => value.foodSize===prince.shoesSize)
// console.log(searchCinderellaOfPrince1);