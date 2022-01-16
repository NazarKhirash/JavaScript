
let div = document.createElement('div')

const arrUsers = JSON.parse(localStorage.getItem('user'))

let favUser = document.getElementById('favUsers')
    for (const userValue of arrUsers) {
        let infoUser = document.createElement('div')
        infoUser.innerHTML = `${userValue.name} - ${userValue.age} - ${userValue.status}`

        document.body.appendChild(div)
        div.append(infoUser)


}
// localStorage.clear()