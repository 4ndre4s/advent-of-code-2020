class SolutionOfDay {
  constructor (day, part1, part2) {
    this.day = day
    this.part1 = part1
    this.part2 = part2
  }

  toString () {
    return `${this.day.toString().padStart(2, '0')}:\n\t1: ${this.part1}\n\t2: ${this.part2}`
  }
}

module.exports = SolutionOfDay
