// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let f1 = document.forms.f1;
// let f2 = document.forms.f2;
// let btn = document.getElementById('btn')
//
// btn.onclick = function () {
//     console.log(`${f1.username1.value} - ${f1.age1.value}`)
//     console.log(`${f2.username2.value} - ${f2.age2.value}`)
// }
// ------------------------------------------------------------------------------------------------------------------------------


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
// let btn = document.createElement('button')
// btn.innerText = 'click'
//
// document.body.append(input1, input2, input3, btn)
//
// btn.onclick = function () {
//     let tr = input1.value
//     let td = input2.value
//     let txt = input3.value
//     let div = document.createElement('div')
//     for (let i = 0; i < tr; i++) {
//         let tr = document.createElement('tr')
//         tr.style.border = '2px solid green'
//         tr.style.padding = '5px'
//         for (let j = 0; j < td; j++) {
//             let td = document.createElement('td')
//             td.style.border = '2px solid green'
//             td.style.padding = '5px'
//             td.innerText = txt
//
//             document.body.append(div)
//             div.append(tr, td)
//         }
//
//     }
// }

// ----------------------------------------------------------------------------------------------------------------------
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arrWords = ['qwe', 'asd', 'zxc', 'wer', 'sdf', 'xcv']
//
// let input = document.createElement('input')
// let btn = document.createElement('button')
// btn.innerText = 'click'
//
//
// let checkArr = (arr) => {
//     btn.onclick = function () {
//         for (const arrValue of arr) {
//             if (input.value === arrValue) {
//                 alert('type any word')
//             } else if (input.value !== arrValue) {
//                 return
//             }
//             console.log(input.value)
//         }
//     }
//     return arr
// }
// checkArr(arrWords)
// document.body.append(input, btn)

// ----------------------------------------------------------------------------------------------------------------------
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let arr = ['qwe', 'asd']
//
// let checkInputForBadWords = (arr) => {
//
//     let btn = document.createElement('button')
//     btn.innerText = 'click'
//     let input = document.createElement('input')
//     btn.onclick = function () {
//
//         for (const arrElement of arr) {
//             if (input.value.includes(arrElement)) {
//                 alert('bad word')
//             }
//         }
//     }
//     document.body.append(input, btn)
//     return arr
// }
// checkInputForBadWords(arr)

