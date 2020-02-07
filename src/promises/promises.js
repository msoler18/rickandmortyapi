const somethingWillHappen = () => {
  return new Promise((resolve,reject) => {
    if(true){
      resolve("Ok promise is resolve")
    } else {
      reject("Promise is reject")
    } 
  })
}

// somethingWillHappen()
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))


const somethingWillHappen2 = () => {
  return new Promise((resolve,reject) => {
    if(true){
      setTimeout(()=>{
        
      },3000)
    } else {
      const error = new Error('Promise is not fine')
      reject(error)
    }
  })
}


// somethingWillHappen2()
//   .then(response => console.log(response))
//   .catch(error => console.log(error))

Promise.all([somethingWillHappen(),somethingWillHappen2()])
  .then(response => {
    console.log("Array of response promises" + response)
  })
  .catch(error => {
    console.log(error)
  })