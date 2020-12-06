const fs = require('fs')

module.exports = {
  getInputOfCurrentDay (dirname) {
    return fs.promises.readFile(dirname + '/input.txt')
  },
  getLinesOfFile (file) {
    return file.toString().split('\r\n')
  }
}
