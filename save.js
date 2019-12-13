//Prototype + CallBack Function
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
Array.prototype.mymap = function (callBackFun) {
  var output = []
  for (let i = 0; i < this.length; i++) {
    //output.push(callBackFun(this[i]))
    output[i] = callBackFun(this[i])
  }
  return output
}
console.log(arrNumbers.mymap(function (value) {
  return value * 2
}))
