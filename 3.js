// Buoi 3
// style: camelCase
// Neu mot function khong ra gia tri return hoac return khong gia tri, tra ve undefined
// function showName(name){
//     console.log("Ten la:" + name)
// }
// console.log("tra ve: " + showName("Tran Ngoc Quoc"))
// var num1 = 20
// var num2 = 30
// var name = "Chamahk"
// function getScore () {
//     var num1 = 2,
//         num2 = 3;
//     function add() {
//       return name + " scored " + (num1 + num2);
//     }
//     return add() + ":" +add();
// }
// console.log(getScore())
// var a = function b(x){return x*x}
// console.log(a(3))
//**Object method */
//Su dung tu khoa this de tham chieu toi doi tuong goi function
// const teo = {
//     name: "Tran van teo",
//     age: 5,
//     speakLanguage: function(){
//         console.log(this.name)// Loi
//     }
// }
// console.log(teo.speakLanguage())
// const rectangle = {
//     width: 20,
//     height: 10,
//     getWidth: function(){
//         console.log(this.width)
//     },
//     getHeight: function(){
//         console.log(this.height)
//     },
//     getArea: function(){
//         console.log(this.width*this.height)
//     }
// }
// rectangle.getWidth()
// rectangle.getHeight()
// rectangle.getArea()
// var a = 10
// function aa(x){
//     x = x * x
// }
// aa(a)
// console.log(a)
// Cac phep so sanh
// var a = 5,b = 6
//6 gia tri la false: 0, null, false, undefined, NaN, ""
// if(a){
//     console.log("Nhay vao if")
// }else{
//     console.log("Nhay vao else")
// }
//(a,b) => bieu thuc dau phay, tinh gia tri ben trai va in ra gia tri benh phai
//Gia tri cua null la: 0
// console.log(a+null)
//So sanh gia tri ==, khong phai so sanh kieu du lieu. Gia tri tra trong bang ma ASCII
//Ket qua tra ve true
//Kieu du lieu Nguyen thuy
// var a = 5
// var b = '5'
// console.log(a==b)
// //So sanh gia tri va kieu du lieu ===
// //Ket qua tra ve false
// console.log(a===b)

//So sanh Object
//Khong the so sanh 2 Object voi nhau duoc, no se so sanh vung nho, luon tra ve fale
// const teo = {name:5}
// const ti  = {name:5}
// if(teo<ti){
//     console.log("Teo lon hon ti")
// }else{
//     console.log("Teo nho hon ti")
// }

//11 : Vong lap

// var arrNames = ["Teo","Ti","Tun","Ton"]
// for( var i=0; i<arrNames.length; i++){
//     console.log(arrNames[i])
// }
// for(var ele of arrNames){
//     console.log(ele)
// }
// var oTree = {
//     color: "Red",
//     height: 10,
//     age: 1
// }
// for(var i of oTree){
//     console.log(i)
// }
// function a(animal){
//     console.log(animal.name)
// }
// var b = {
//     name:"Cho"
// }
// a(b)
//**Vong lap for, for in, for of */
