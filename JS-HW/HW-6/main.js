// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.length)
//
// let str2 = 'lorem ipsum';
// console.log(str2.length)
//
// let str3 = 'javascript is cool';
// console.log(str3.length)
//----------------------------------------------------------------------------------------------------------------------
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let strUpCase1 = 'hello world';
// console.log(strUpCase1.toUpperCase())
//
// let strUpCase2 = 'lorem ipsum';
// console.log(strUpCase2.toUpperCase())
//
// let strUpCase3 = 'javascript is cool';
// console.log(strUpCase3.toUpperCase())
//----------------------------------------------------------------------------------------------------------------------
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let strLowerCase1 = 'HELLO WORLD';
// console.log(strLowerCase1.toLowerCase())
//
// let strLowerCase2 = 'LOREM IPSUM';
// console.log(strLowerCase2.toLowerCase())
//
// let strLowerCase3 = 'JAVASCRIPT IS COOL';
// console.log(strLowerCase3.toLowerCase())
//----------------------------------------------------------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let strTrim = ' dirty string   '
// console.log(strTrim.trim())
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let stringToArray = (arr)=>arr.split()
// console.log(stringToArray(str))
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let strCharAt = (str)=>str.substr(str, 5)
// console.log(strCharAt(str))
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let strReplace = (str)=>str.replaceAll(' ','-').toUpperCase()
// console.log(strReplace(str))
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'hello'
// let strLowerCase1 = (str)=>str[0].toUpperCase()+str.slice(1)
// console.log(strLowerCase1(str))
//----------------------------------------------------------------------------------------------------------------------
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let strToUpperCAse = (str)=>str.toUpperCase()
// console.log(strToUpperCAse('hello world'))