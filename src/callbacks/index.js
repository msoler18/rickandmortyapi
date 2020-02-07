const sum = (num1,num2) => num1 + num2

const calc = (num1,num2,callback) => {
  return callback(num1,num2)
} 

// console.log(calc(8,2,sum))


const date = (callback) => {
  console.log(new Date)
  setTimeout( ()=>{
    let date = new Date
    callback(date)
  },3000)
  console.log("Finish function?")
}

const printDate = (date) => {
  console.log(date)
}

console.log(date(printDate))
console.log("Finish execution?")