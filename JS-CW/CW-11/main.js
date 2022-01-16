// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
let mainDiv = document.createElement('div')
mainDiv.classList.add('main-div')
for (const user of users) {
    let divUser = document.createElement('div')
    divUser.classList.add('user-div')
    divUser.innerHTML = `${user.name} - ${user.age} - ${user.status}`

    let btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = 'додати до улюблуних'

    divUser.append(btn)
    mainDiv.append(divUser)
    document.body.append(mainDiv)


    btn.onclick = function () {
        let userArr = JSON.parse(localStorage.getItem('user'))||[]
            userArr.push(user)
        localStorage.setItem('user', JSON.stringify(userArr))
        btn.disabled = true
    }
}
// localStorage.clear()
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
