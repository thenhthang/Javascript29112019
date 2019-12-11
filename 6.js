//** Built-in function : function da duoc xay dung san, chi goi lai*/
// Ham Random
// 5 - 11
// const number = (Math.random() * 6) + 5
// console.log(number)
// // Ham Round: duoi 0.5 lam tron xuong, lon hon hoac bang 0.5 lam tron len
// var number1 = Math.round(number)
// console.log(number1)
// // Ham lam tron xuong
// console.log(Math.floor(number))
// //Ham lan tron len
// console.log(Math.ceil(number))
// //Ham can bac 2
// console.log(Math.sqrt(number))

//** Handle Object : Xu li trong Object */
// Xoa mot thuoc tinh trong Object
const teo = {
    name : "Nguyen van teo",
    age : 5,
    address: "Quan 12"
}
delete teo.age
console.log(teo)
console.log(Object.keys(teo).length)
console.log(Object.keys(teo))