//** Buoi 5 */
// Array map
 // const numbers = [1,3,5,7,9]
 
//  var newNumbers = numbers.map(function(value,index,array){
//      //console.log(value,index,array)
//      if(value >=5){
//          return value * 2
//      }
//      return value 
//  })
//  console.log(newNumbers)

//  Array.prototype.myMap = function(fn){
//      var ouput = []
//      for(var i = 0;i<this.length;i++){
//          const value = fn(this[i])
//          ouput.push(value)
//      }
//      return ouput;
//  }
//  const newNumbers = numbers.myMap(function(value){
//      return value * 2
//  })
//  console.log(newNumbers)

// const names = ["Teo","Ti","Tun","Tom","Cho"]
// const newNames = names.filter(function(value){
//     if(value === 'Teo'){
//         return false
//     }
//     else{
//         return true
//     }
// })
// console.log(newNames)

//** Ham reduce */

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const sum = numbers.reduce(function(total,currentValue){
//     return total + currentValue
// })
// console.log(sum)

// const arrUsers = [
//     {id: 1, name: "Teo", age: 5},
//     {id: 2, name: "Ti", age: 3},
//     {id: 3, name: "Tun", age: 6},
//     {id: 4, name: "Tom", age: 7},
//     {id: 5, name: "Ton", age: 10},
// ]
// // Cach 1
// const sumAge1 = arrUsers.reduce(function(total,currentValue){
//     return total + currentValue.age
// },0)
// console.log(sumAge1)
// // Cach 2
// const sumAge2 = arrUsers.map(function(user){
//     return user.age
// }).reduce(function(total,currentAge){
//     return total + currentAge
// })
// console.log(sumAge2)

//** Ham Sort */

const numbers = [1,2,3,4,5,6,7,8,9,"dfd10fdsfsd"]
// a - b > 0 : thi a dung truoc, b dung sau
const newNumbers = numbers.sort(function(a,b){
    return a - b
});

console.log(newNumbers)
