// Все робити за допомоги js.
// - створити блок,
// let newDiv = document.createElement('div')

//     - додати йому класи wrap, collapse, alpha, beta
// newDiv.classList.add('wrap','collapse', 'alpha', 'beta')
// console.log(newDiv);

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// newDiv.style.height = '200px'
// newDiv.style.width = '200px'
// newDiv.style.backgroundColor = 'blue'
// newDiv.innerHTML = 'hello'
// newDiv.style.fontSize = '80px'

// - додати цей блок в body.
// document.body.append(newDiv)

// - клонувати його повністю, та додати клон в body.
// let cloneNewDiv = newDiv.cloneNode()
// document.body.append(cloneNewDiv)

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let mainUl = document.getElementsByClassName('menu')[0]
//
// let arr = ['Main','Products','About us','Contacts']
// for (const item of arr) {
//     let li = document.createElement('li')
//
//     mainUl.append(li)
//     li.append(item)
// }
//
// -------------------------------------------------------------------------------------------------------------------------//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// let mainDiv = document.createElement('div')
// mainDiv.classList.add('main')
// for (const value of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.innerHTML = `${value.title} - ${value.monthDuration}`
//
//     mainDiv.append(div)
//
// }
// document.body.append(mainDiv)
//
// ----------------------------------------------------------------------------------------------------------------------//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
// let mainDiv = document.createElement('div')
// mainDiv.classList.add('main')
//
// for (const value of coursesAndDurationArray) {
//     let itemDiv = document.createElement('div')
//     itemDiv.classList.add('item')
//     let h1 = document.createElement('h1')
//     h1.classList.add('heading')
//     h1.innerHTML = `${value.title}`
//     let p = document.createElement('p')
//     p.classList.add('description')
//     p.innerHTML = `${value.monthDuration}`
//
//     mainDiv.append(itemDiv)
//     itemDiv.append(h1,p)
//
//
//     document.body.append(mainDiv)
// }
