let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
let API = 'https://rickandmortyapi.com/api/character/'


function fecthData(url_api,callback){
  let xhttp = new XMLHttpRequest()
  xhttp.open('GET',url_api,true)
  xhttp.onreadystatechange = function(event){
    if(this.readyState === 4){
      if(this.status === 200){
        callback(null,JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error in' + url_api)
        return callback(error,null)
      }
    }
  }
  xhttp.send()
}


fecthData(API,function(error,data){
  if(error) return console.error(error)
  fecthData(API + data.results[0].id, function (error1,data1){
    if(error) return console.error(error1)
    fecthData(data1.origin.url,function(error2,data2){
      if(error) return console.error(error2)
      console.log("Number of characters is:" + data.info.count) 
      console.log("The name of character is:" + data1.name) 
      console.log("Character dimension is:" + data2.dimension)
    })  
  })
})