const fileUtil = require('../../util/fileUtil')
const SolutionOfDay = require('../../SolutionOfDay')

module.exports = async function () {
  const file = await fileUtil.getInputOfCurrentDay(__dirname)
  const lines = fileUtil.getFilledLinesOfFile(file)

  const part1 = solvePartOne()

  return new SolutionOfDay(2, part1)

  function solvePartOne() {
    return lines.filter(line => {
      const [intervals, letterSection, password]  = line.split(' ')
      const [minOccurrences, maxOccurrences] = intervals.split('-')
      const [letter] = letterSection
      const actualOccurrences = password.split(letter).length - 1
      return actualOccurrences >= minOccurrences && actualOccurrences <= maxOccurrences
    }).length
  }
}
