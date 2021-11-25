// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numMin (a,b,c){
//     if (a<b && a<c){
//         console.log(a)
//     }else if (b<a && b<c){
//         console.log(b)
//     }else if (c<a&&c<b){
//         console.log(c)
//     }
// }
// numMin(32,21,6)
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numMax(a,b,c){
//     if (a>b && a>c){
//         console.log(a)
//     }else if (b>a && b>c){
//         console.log(b)
//     }else if (c>a && c>b){
//         console.log(c)
//     }
// }
// numMax(4,2,76)
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву
// function numMax1 (arr) {
//     return Math.max.apply(null,arr)
// }
// console.log(numMax1([1,2,3,31, 12]))
// ------------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву
// function numMin1(arr){
//     return Math.min.apply(null,arr)
// }
// console.log(numMin1([32,12,5,31]))
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function numSum(arr){
//     let res = 0;
//     for (const arrElement of arr) {
//         res+=arrElement
//     }
//     return res
// }
//
// console.log(numSum([23,45,42]))
//
//
//
//
// let numSum = [1,2,3,4,5].reduce(function (a,b){
//     return a+b;
// })
// console.log(numSum)



//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1,2,3,4,5];
// let mean = arr.reduce(function (accumulator,value){
//         return accumulator + value;
// })
// const averageValue = mean / arr.length
// console.log(averageValue)
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function returnMinLogMax(arg){
//    let min = arguments[0];
//    let max = arguments[0];
//     for (const argument of arguments) {
//         if (argument>max){
//             max = argument;
//         }
//         if (argument<min){
//             min =argument
//         }
//     }
//     console.log(max)
//     return min
// }
//
// console.log(returnMinLogMax(1,2,3,45,6,7))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// debugger
// let arr = [];
// function random() {
//     for (let i = 0; i <10; i++) {
//        arr.push(Math.round(Math.random() * 100))
//     }
//     return arr
// }
// random()


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr1 = [];
// function random1(limit){
//     for (let i = 0; i < 10; i++) {
//         arr1.push(Math.round(Math.random()*limit))
//     }
//     return arr1
// }
// random1(100)
// document.write(`${arr1}`)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let numbers1 = []
// let numbers = [1,2,3]
// function reverseArr(){
//    numbers1 = numbers.reverse()
//     return numbers1
// }
// reverseArr()
// console.log(numbers1)




let numbers2 = []
function reverseArr2(arr){
        numbers2 = arr.reverse()
    return arr
}

reverseArr2([1,2,3])
console.log(numbers2)

let arr2 = reverseArr2([2,3,4,5,6,7,8])
console.log(arr2)

let arr3 = reverseArr2([4,5,6,7,8,9,0])
console.log(arr3)



