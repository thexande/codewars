// const arr = [1, 2, 3[1], [[1, 2, 3, [1,1,4], 3], [1,2]]]
// const reduceArr = (arr, val = 0) => {
//   return arr.reduce((prev, curr) => {
//     if(typeof(curr) === "number") {
//       return prev + curr
//     } else if(curr != undefined) {
//       return reduceArr(curr, prev)
//     }
//   }, val)
// }
// console.log(reduceArr(arr))

// function correctEmails(pattern) {
//   return alpha(pattern).map((pos) => {
//     return pattern.replace("?", pos)
//   })
// }

// var alpha = (str) => {
//     return str
//       .replace(/\W+/g, "")
//       .replace("com", "")
//       .split("")
//       .filter((value, index, self) => {
//        return self.indexOf(value) == index
//     })
// }

// console.log(correctEmails("abc@?abc.com"))
