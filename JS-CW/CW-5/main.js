// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numMin = (a,b,c)=>{
//     if (a<b&&a<c){
//         console.log(a)
//     }else if(b<c&&b<a){
//         console.log(b)
//     }else if (c<a&&c<b){
//         console.log(c)
//     }else {
//         return 0
//     }
// }
// numMin(4,3,6)
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let numMax = (a,b,c)=>{
//     if (a>b&&a>c){
//         console.log(a)
//     }else if (b>a&&b>c){
//         console.log(b)
//     }else if (c>a&&c>b){
//         console.log(c)
//     }else{
//         return 0
//     }
// }
// numMax(3,66,90)
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву
// let numMaxReturn = (arr)=>Math.max.apply(null,arr)
// console.log(numMaxReturn([1,2,3,5,32,12]))
//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву
// let numMinReturn = (arr)=>console.log(Math.min.apply(null,arr))
// numMinReturn([2,412,22,12,5,1])
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrReduce = [1,2,3,4].reduce((a,b)=>a+b)
// console.log(arrReduce)
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrArithMean = (arr)=>{
//     let a = 0;
//     for (const arrElement of arr) {
//         a+=arrElement
//     }
//     return a/arr.length
// }
// console.log(arrArithMean([1,2,3,4,5]))
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minMax = (...arg)=> {
//     let min = arg[0];
//     let max = arg[0];
//     for (const argument of arg) {
//         if (argument>max){
//             max=argument
//         }
//         if (argument<min){
//             min=argument;
//         }
//     }
//     console.log(max)
//     return min
// }
// console.log(minMax(1,2,3,4,5))
const minMax = (...arg)=> {
    let min = arg[0];
    let max = arg[0];
    for (const element of arg) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log(max);
    return min
}
console.log(minMax(30,45,234))
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr2 = []
// let arrRandom = ()=>{
//     for (let i = 0; i < 10; i++) {
//     arr2.push(Math.round(Math.random()*100))
//     }
//     console.log(arr2)
// }
// arrRandom()
//----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr3 =[];
// let arrRandom2 = (size,limit)=>{
//     for (let i = 0; i < size; i++) {
//         arr3.push(Math.round(Math.random()*limit))
//     }
// }
// arrRandom2(20,50)
// console.log(arr3)
//----------------------------------------------------------------------------------------------------------------------
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1,2,3,4]
// let arrReverse = (arr)=>{
//     let newArr = []
//     for (let i = arr.length - 1,ri=0; i >= 0; i--,ri++) {
//         newArr[ri]=arr[i]
//     }
//     return newArr
// }
// console.log(arrReverse(array))
