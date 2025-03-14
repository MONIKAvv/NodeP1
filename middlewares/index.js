// how can we set up the middle ware its easy 

//  create a function

const fs = require("fs")
function logReqRes(filename){
  return (req, res, next) => {
    fs.appendFile(filename, 
      `\n ${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`, (error, data) => {
        next()
      }
    )
  }
}

module.exports = {logReqRes};