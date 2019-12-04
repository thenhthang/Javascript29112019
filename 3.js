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
const rectangle = {
    width: 20,
    height: 10,
    getWidth: function(){
        console.log(this.width)
    },
    getHeight: function(){
        console.log(this.height)
    },
    getArea: function(){
        console.log(this.width*this.height)
    }
}
rectangle.getWidth()
rectangle.getHeight()
rectangle.getArea()
