
function rowSumOddNumbers(n) {
	// TODO
  var arr = []
  var last = 1
  for(var i = 1; i <= n; i++){
    arr.push(oddRange(i, last))
    last = nextOdd(arr[arr.length - 1][i - 1])
  }
  return arr[n - 1].reduce((p, c) => p + c)
}

console.log(nextOdd(0))

function nextOdd(num) {
var counter = 0
  while((num + counter) % 2 == 0 || num + counter == num){
    counter++
  }
  return num + counter
}


function oddRange(length, start) {
  var holder = [start]
  while(holder.length != length){
    holder.push(nextOdd(holder[holder.length - 1]))
  }
  return holder
}

console.log(oddRange(3, 1))
console.log(nextOdd(0))
console.log(rowSumOddNumbers(10))