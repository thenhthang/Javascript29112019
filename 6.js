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
// const teo = {
//     name : "Nguyen van teo",
//     age : 5,
//     address: "Quan 12"
// }
// delete teo.age
// console.log(teo)
// console.log(Object.keys(teo).length)
// console.log(Object.keys(teo))

//** Prototype */

// Prototype chi khoi tao mot lan, cac doi tuong su dung no se ke thua lai, khong can khoi tao lai
//Tao lop doi tuong
// function Person(Name,Age){
//     this.name = Name
//     this.age = Age
//     this.showName = function(){
//         console.log(this.name)
//     }
// }
// // const teo = new Person("Tran van teo",5)
// // console.log(teo)
// // teo.showName()
// Person.prototype.showAge = function(){
//     console.log(this.age)
// }
// const teo = new Person("Nguyen van teo",5)
// const ti = new Person("Nguyen van teo",5)

// console.log(teo.showAge === ti.showAge)
// console.log(teo.showName === ti.showName)

//** Toan tu 3 ngoi */

//Khong nen su dung nhieu vi render giao dien rat cham
// var a = 5, b = 10
// console.log(a > b ? "A>B":"A<B")

//** Functional scope */
//** Block scope : {} */
// var a = 1
// function show(){
//     var a = 2
//     console.log(a)
// }
// show()
// console.log(a)

//**  */

// Hoisting: Khi dung a. js se tu khoi tao ra a cho viec su dung, phan khai bao tu dong duoc dua len truoc
// function show(){
//     console.log(a)
//     var a = 5
// }
// show()

//** var:  */
var i = 100
for(var i = 0;i<=10;i++){
    console.log(i)
}
console.log("i",i)
//** Su dung let, const : tranh tinh trang redecle, tranh tinh trang Hoisting */

