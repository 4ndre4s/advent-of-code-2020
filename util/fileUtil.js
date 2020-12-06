const fs = require('fs')

module.exports = {
  getInputOfCurrentDay (dirname) {
    return fs.promises.readFile(dirname + '/input.txt')
  }
}
