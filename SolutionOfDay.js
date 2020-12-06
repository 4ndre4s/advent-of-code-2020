class SolutionOfDay {
  constructor (name, result) {
    this.name = name
    this.result = result
  }
  toString () {
    return `${this.name}: ${this.result}`
  }
}

module.exports = SolutionOfDay
