
function theBeatlesPlay (arr1, arr2){
  let arr = []
  for (let i = 0; i < arr1.length; i++){
    arr.push(arr1[i] + " plays " + arr2[i])
  }
  return arr
}


function johnLennonFacts (arr){
  let arr1 = []
  let i = 0
  do {
    arr1.push(arr[i] + "!!!")
    i++
  } while (i < arr.length)
  return (arr1)
} 

function iLoveTheBeatles(num){
  let arr1 = []
  let i = 0
  do {
    arr1.push("I love the Beatles1")
    i++
  } while (i < 15)
  return (arr1)
} 