let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function fecthData(url_api,callback){
  let xhttp = new XMLHttpRequest()
  xhttp.open('GET',url_api,true)
  xhttp.onreadystatechange = function(event){
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){
        callback(null,JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error in' + url_api)
        return callback
      }
    }
  }
}