//Co 6 kieu du lieu nguyen thuy
//null la Object
//function la function
//undefined la undefined
// var number = 5, 
// name = "Tran van teo",
// arr = [1,2,3,4,5],
// specialundefined = undefined,
// specialNull = null
// console.log(typeof number,
//     typeof name,
//     typeof arr, 
//     typeof specialundefined,
//     typeof specialNull)

//** 13. Array method */

//const numbers = [1,2,3,4,5]
//1. Them phan tu vao vi tri cuoi cung
//numbers.push(6,7,8,"haha")
//console.log(numbers)
//2. Lay ra va Xoa phan tu vi tri cuoi cung
// var value = numbers.pop()
//console.log(value)
//3. Them phan tu vi tri dau tien
// numbers.unshift(-1,0)
// console.log(numbers)
//4. Lay ra va Xoa phan tu vi tri dau tien
// numbers.shift()
// console.log(numbers)
//5. Xoa phan tu vao vi tri bat kieu
// numbers.splice(2,1)
// console.log(numbers)
//6 Them phan tu vao vi tri bat ky
// numbers.splice(2,0,"haha")
// console.log(numbers)

//**14. Callback function tham so */

// function tinhTong(a,b){
//     return a+b
// }
// function showLog(fun){
//     console.log(fun(5,2))
// }
// showLog(tinhTong)

// var giangVien = {
//     name: "Phan tan phat",
//     thoigianday: function(dosomething){
//         console.log("Ket thuc: 5h")
//         dosomething()
//     }
// }
// function ketThucDay(){
//     console.log("Ket thuc luc: 6h")
// }
// giangVien.thoigianday(ketThucDay)