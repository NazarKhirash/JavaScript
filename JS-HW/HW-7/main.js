// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function Users(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let userArr =[
//     user1 = new Users(1,'dfbdfb','acskjbewv','kjaxbsc@lic.aks',87412545129512),
//     user1 = new Users(2,'cqfqf','hsrthsrth','kjaxbsc@lic.aks',4753736),
//     user1 = new Users(3,'vaqwdqfsya','jgkktul','kjaxbsc@lic.aks',2524637),
//     user1 = new Users(4,'fqwffv','urtktkgh','kjaxbsc@lic.aks',23524657),
//     user1 = new Users(5,'kuyukyyuk','sdgzdgw','kjaxbsc@lic.aks',34762899),
//     user1 = new Users(6,'tyjt','uylylhj','kjaxbsc@lic.aks',874125451),
//     user1 = new Users(7,'mhj,kiu','acsk,,yujbewv','kjaxbsc@lic.aks',4121251),
//     user1 = new Users(8,'i.ooi','ehetjfg','kjaxbsc@lic.aks',87412545129512),
//     user1 = new Users(9,'mtmg','zx;pvo','kjaxbsc@lic.aks',412125),
//     user1 = new Users(10,'hmtmtt','oiqwfhoq','kjaxbsc@lic.aks',589462768),
//
// ]

// console.log(userArr)

//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let userArrFilter = userArr.filter((arrElement)=>{
//     if (arrElement.id%2===0){
//         return arrElement
//     }
// })
// console.log(userArrFilter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userArrSort = userArr.sort((a,b)=>a.id-b.id)
// console.log(userArrSort)
//----------------------------------------------------------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clientArr = [
//     client1 = new Client(1,'dfbdfb','acskjbewv','kjaxbsc@lic.aks',87412545129512,['adwq','faw']),
//     client2 = new Client(2,'cqfqf','hsrthsrth','kjaxbsc@lic.aks',4753736,['qw']),
//     client3 = new Client(3,'vaqwdqfsya','jgkktul','kjaxbsc@lic.aks',2524637,['dqwfas','fqwgr','lkoj']),
//     client4 = new Client(4,'fqwffv','urtktkgh','kjaxbsc@lic.aks',23524657,'oi','oihc'),
//     client5 = new Client(5,'kuyukyyuk','sdgzdgw','kjaxbsc@lic.aks',34762899,['kajcq','outqa','qliwh']),
//     client6 = new Client(6,'tyjt','uylylhj','kjaxbsc@lic.aks',874125451,['ixoqw']),
//     client7 = new Client(7,'mhj,kiu','acsk,,yujbewv','kjaxbsc@lic.aks',4121251,['asi']),
//     client8 = new Client(8,'i.ooi','ehetjfg','kjaxbsc@lic.aks',87412545129512,['qiwj','aisc']),
//     client9= new Client(9,'mtmg','zx;pvo','kjaxbsc@lic.aks',412125,['uuxq','alishcq']),
//     client10 = new Client(10,'hmtmtt','oiqwfhoq','kjaxbsc@lic.aks',589462768,['qowc']),
// ]
//----------------------------------------------------------------------------------------------------------------------
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let clientArrSort = clientArr.sort((a,b)=>a.order.length-b.order.length)
// console.log(clientArrSort)