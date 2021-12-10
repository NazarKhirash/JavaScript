// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let addClassToMainHeader = document.getElementById('main_header')
// addClassToMainHeader.classList.add('name_group')
// console.log(addClassToMainHeader)
//-------------------------------------------------------------------------------------------------
// b) робить шириниу елементу ul 400px

// let widthUl400 = document.getElementsByTagName('ul')
// widthUl400[0].style.width = '400px';
// widthUl400[0].style.backgroundColor = 'blue'
//-------------------------------------------------------------------------------------------------
// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let widthLinkList = document.getElementsByClassName('linkList')
// for (const widthLinkListElement of widthLinkList) {
//     widthLinkListElement.style.width = '50%'
// }
//-------------------------------------------------------------------------------------------------
// d) отримує текст який зберігається в елементі з класом listElement2

// let txtListElement2 = document.getElementsByClassName('listElement2')
// console.log(txtListElement2[0].innerText);
//-------------------------------------------------------------------------------------------------
// e) отримує всі елементи li та змінює ім колір фону на сірий

// let colorLi = document.getElementsByClassName('linkList')
// for (const colorLiElement of colorLi) {
//     colorLiElement.style.backgroundColor = 'grey'
//     colorLiElement.style.marginTop = '5px'
// }
//-------------------------------------------------------------------------------------------------
// f) отримує всі елементи 'a' та додає їм клас anchor

// let addClassToA = document.getElementsByTagName('a')
// for (const addClassToAElement of addClassToA) {
//     addClassToAElement.classList.add('anchor')
//     console.log(addClassToAElement)
// }

//-------------------------------------------------------------------------------------------------
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let sizeTxtLink3 = document.getElementsByClassName('anchor')
// for (const sizeTxtLink3Element of sizeTxtLink3) {
//     if (sizeTxtLink3Element.innerText === 'link3'){
//         sizeTxtLink3Element.style.fontSize = '40px'
//     }
// }
//-------------------------------------------------------------------------------------------------
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let addNewClassToA = document.getElementsByTagName('a')
// for (const addNewClassToAElement of addNewClassToA) {
//     addNewClassToAElement.classList.add('element_XXX')
//         addNewClassToAElement.innerText = 'XXX'
// }
//-------------------------------------------------------------------------------------------------
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()


// let subHeader = document.getElementsByClassName('sub-header')
// for (const subHeaderElement of subHeader) {
//     let colorSubHeader = prompt('Напишіть колір на який хочете змінити фон')
//     if (colorSubHeader === 'зелений' || colorSubHeader === 'Зелений' || colorSubHeader === 'ЗЕЛЕНИЙ' || colorSubHeader === 'green') {
//         subHeaderElement.style.backgroundColor = 'green'
//     } else if (colorSubHeader === 'синій' || colorSubHeader === 'Синій' || colorSubHeader === 'СИНІЙ' || colorSubHeader === 'blue') {
//         subHeaderElement.style.backgroundColor = 'blue'
//     } else if (colorSubHeader === 'жовтий' || colorSubHeader === 'Жовтий' || colorSubHeader === 'Жовтий' || colorSubHeader === 'yellow') {
//         subHeaderElement.style.backgroundColor = 'yellow'
//     } else if (colorSubHeader === 'червоний' || colorSubHeader === 'Червоний' || colorSubHeader === 'ЧЕРВОНИЙ' || colorSubHeader === 'red') {
//         subHeaderElement.style.backgroundColor = 'red'
//     } else if (colorSubHeader === 'чорний' || colorSubHeader === 'Чорний' || colorSubHeader === 'ЧОРНИЙ' || colorSubHeader === 'black') {
//         subHeaderElement.style.backgroundColor = 'black'
//     } else {
//         console.log('Ви ввели невірний колір')
//     }
// }
//---------------------------------------------------------------------------------------------------
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()


// let colorTxtSubHeader = document.getElementsByClassName('sub-header')
// for (const colorTxtSubHeaderElement of colorTxtSubHeader) {
//     colorTxtSubHeaderElement.style.color = prompt('Введіть колір:(red,green,yellow,blue, black)')
// }
//----------------------------------------------------------------------------------------------------
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let changeTxtContent_1 = document.getElementsByClassName('content_1')
// for (const changeTxtContent1Element of changeTxtContent_1) {
//     changeTxtContent1Element.innerHTML = prompt('Введіть текст на який хочете замінити')
// }
//----------------------------------------------------------------------------------------------------
// l) отримати елементи p та змінити їм padding на 20px

// let pList = document.getElementsByTagName('p')
// for (const pListElement of pList) {
//     pListElement.style.padding = '20px'
// }
//----------------------------------------------------------------------------------------------------
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let txtText2 = document.getElementsByClassName('text2')
// for (const txtText2Element of txtText2) {
//     txtText2Element.innerHTML = 'mon-year'
// }
//-----------------------------------------------------------------------------------------------------