// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form = document.forms.username;
// let btn = document.getElementById('btn')
//
// btn.onclick = function (){
//         let user = {
//                 name: form.name.value,
//                 age: form.age.value
//         }
//     localStorage.setItem('user', JSON.stringify(user))
// }
//
//----------------------------------------------------------------------------------------------------------------------
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let formCar = document.forms.car
let btn = document.getElementById('btn')

let objCar = (carModel, carType, carVolume) => {
    let carArr = JSON.parse(localStorage.getItem('cars')) || []

    carArr.push({carModel, carType, carVolume})
    localStorage.setItem('cars', JSON.stringify(carArr))
}

btn.onclick = () => {
    objCar(car.model.value, car.type.value, car.volume.value)
}





