
var recipie = {"cream":200,"flour":300,"sugar":150,"milk":100,"oil":100}
var available = {"sugar":1700,"flour":20000,"milk":20000,"oil":30000,"cream":5000}

function cakes(recipie, available) {
  var count = []
  for (var ingredient in recipie) {
    if(recipie.hasOwnProperty(ingredient)){
      if(available.hasOwnProperty(ingredient)) {
        var num = ((available[ingredient] / recipie[ingredient])).toFixed(0)
        count.push(num)
      } else {
        count = [0]
      }
    }
  }
  console.log(count)
  return Number(count.sort()[0])
}
console.log(cakes(recipie, available))

