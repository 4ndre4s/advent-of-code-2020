const fs = require('fs')

module.exports = {
  getInputOfCurrentDay (dirname) {
    return fs.promises.readFile(dirname + '/input.txt')
  },
  getNonBlankLinesOfFile (file) {
    return file.toString().split('\r\n').filter(v => v.length !== 0)
  }
}
