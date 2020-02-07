const somethingWillHappen = () => {
  return new Promise((resolve,reject) => {
    if(){
      resolve("Ok promise is resolve")
    } else{
      reject("Promise is reject")
    } 
  })
}

somethingWillHappen()
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))