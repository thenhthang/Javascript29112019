// var x = 10
// var y = 12
// var z = x + y
// console.log(z)
// var z = x - y
// console.log(z)
// var z = x * y
// console.log(z)
// var z = x / y
// console.log(z)
// var firstName = "Quốc"
// var age = 29
// console.log(firstName)
// console.log(firstName+" "+age+' tuổi')
// //Object
// var patient = {
//     hoten:"Nguye van a",
//     diachi:"Quan 1, TPHCM",
//     namsinh:1879,
//     gioitinh: true
// }
// console.log(patient)
// var listAnimal = [{name:"Cho",age:10},{name:"Meo",age:2,color:"red"}]
// console.log(listAnimal)
// console.log(listAnimal[0])
// console.log(listAnimal[1])
// for(var animal of listAnimal){
//     console.log(animal.name)
// }
// var a = 10
// var x = --a + a++
// //console.log(--a)
// console.log("a = "+ a++)
// console.log("x = "+ x)
// var a = 10
// var b = 18
// var x = a-- + b++ - ++b - ++a
// console.log(x)
// var a = 10
// console.log(a+a)
// console.log(a*2)
// console.log(a+a++)
// console.log(a+ ++a)
// function getBoxVolumn(rong,cao,dai){
//     return rong*cao*dai
// }
// console.log(getBoxVolumn(10,20,30))
//a = a+ 1; a+=1; a++
// function myFunc(theObject){
//     theObject.make = "Toyota"
//     return theObject.model
// }
// var myCar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1990
// }
// console.log(myFunc(myCar))
// console.log(myCar.make)
// var hinhvuong = function(so){return so*so}
// console.log(hinhvuong(4))

// var a = function(){console.log("Con meo")}
// function b(){console.log("Con cho")}
// var c = [function(){return "Dien"},{name:"Teo",age:10},10,"Yellow"]
// a()
// b()
// for(var e of c){
//     console.log(e)
// }
// console.log(c[0]())
// var a = 5
// var b = '5'
// console.log("So sanh ==, so sanh gia tri:",a==b)
// console.log("So sanh > hoac <: luon tra ve false",a<b)
//**
//** THUC HANH BUOI 3 */
// var apartment = {
//     bedroom: {
//         area: 20,
//         bed: {
//             type: 'twin-bed',
//             price: 100
//         }
//     }
// }
// function getkey(obj){
//     for(var e in obj){
//         console.log("key:",e)
//         if(typeof(obj[e])=="object"){
//             getkey(obj[e])
//         }
//     }
// }
// function getkeykhongdequi(obj){
//     for(var e in obj){
//         console.log("key:",e)
//         for(var ee in obj[e]){
//             console.log("key 1:",ee)
//             for(var eee in obj[e][ee]){
//                 console.log("key 2:",eee)
//             }
//         }
//     }
// }
// getkeykhongdequi(apartment)
// var chuoi = "tran ngoc quoc"
// for(var i of chuoi){
//     console.log(i)
// }
function transform(numbers,callback){
    var results = []
    for(var e of numbers){
        results.push(callback(e))
    }
    return results
}
function double(number){
    return number * 2
}
var output = transform([2,4,6],double)
console.log(output)