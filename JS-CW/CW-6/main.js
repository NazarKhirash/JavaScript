// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let strTrim = (str)=>str.replace('..',' ').replace('---',' ').replace('__',' ')
// console.log(strTrim(n2))
//
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let array = []
// let arrRandom = function (size){
//     for (let i = 0; i < size; i++) {
//    array.push((Math.round(Math.random()*100)))
//     }
//     return array;
// }
// console.log(arrRandom(6))
//----------------------------------------------------------------------------------------------------------------------

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let array = []
// let arrRandom = function (size){
//     for (let i = 0; i < size; i++) {
//    array.push((Math.round(Math.random()*100)))
//     }
//     return array.sort();
// }
// console.log(arrRandom(6))
//----------------------------------------------------------------------------------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let array = []
// let arrRandom = function (size){
//     for (let i = 0; i < size; i++) {
//    array.push((Math.round(Math.random()*100)))
//     }
//     return array.filter(value => value%2===0)
// }
// console.log(arrRandom(6))
//----------------------------------------------------------------------------------------------------------------------
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,21,3];
//
// let arrSortAscending = (arr)=>arr.sort((a,b)=>a-b)
// console.log(arrSortAscending(nums))
//
// let arrSortDescending = (arr)=>arr.sort((a,b)=>b-a);
// console.log(arrSortDescending(nums))
//----------------------------------------------------------------------------------------------------------------------
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let arrObjSortMonth = (arr)=> {
//    return  arr.sort((a,b)=>b.monthDuration-a.monthDuration).filter((arrElement)=>{
//        if (arrElement.monthDuration>5){
//            return arrElement
//        }
//    })
// }
// console.log(arrObjSortMonth(coursesAndDurationArray))



