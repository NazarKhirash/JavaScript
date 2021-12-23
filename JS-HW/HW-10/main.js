// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let p = document.createElement('p')
// p.classList.add('text')
// p.innerHTML = 'ajgscyatcwqytwqckytwkqcy'
//
// document.body.appendChild(p)
//
// p.onclick = function (){
//     p.style.display = 'none'
// }
//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn = document.createElement('button')
// btn.innerHTML = 'button'
//
// document.body.appendChild(btn)
//
// btn.onclick = function (){
//     btn.style.display = 'none'
// }

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

// let btn = document.getElementById('btn')
// btn.onclick = function () {
//     let age = document.getElementById('age').value
//     if (+age < 18) {
//         alert('danger zone')
//     }else if (age>18){
//         alert('welcome')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике


// let btn = document.querySelector('.btn')
// let ul = btn.querySelector('.ul')
// btn.onclick = function (){
//     ul.classList.toggle('hard')
// }


//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.

// let array = [
//     {name: 'ascqw', age: 123},
//     {name: 'aw', age: 23},
//     {name: 'scqw', age: 323},
// ]
//
// for (const arrayElement of array) {
//     let divMain = document.createElement('div')
//     let divObj = document.createElement('div')
//     let h3 = document.createElement('h3')
//     let p = document.createElement('p')
//     let btn = document.createElement('button')
//
//
//     h3.innerHTML = `${arrayElement.name}`
//     p.innerHTML = `${arrayElement.age}`
//     btn.innerHTML = 'сховати інфу'
//
//     document.body.appendChild(divMain)
//     divMain.appendChild(divObj)
//     divObj.append(h3, p, btn)
//
//     btn.onclick = function (){
//          p.style.display = 'none'
//     }
// }

//     Добавьте каждому комментарию по кнопке для сворачивания его body.

