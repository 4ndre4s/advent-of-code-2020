const fileUtil = require('../../util/fileUtil')
const SolutionOfDay = require('../../util/SolutionOfDay')

module.exports = async function () {
  const file = await fileUtil.getInputOfCurrentDay(__dirname)
  const lines = fileUtil.getNonBlankLinesOfFile(file)

  const part1 = solvePartOne()
  const part2 = solvePartTwo()

  return new SolutionOfDay(2, part1, part2)

  function solvePartOne () {
    return lines.filter(line => {
      const { password, minOccurrences, maxOccurrences, letter } = getPasswordData(line)
      const actualOccurrences = password.split(letter).length - 1

      return actualOccurrences >= minOccurrences && actualOccurrences <= maxOccurrences
    }).length
  }

  function solvePartTwo () {
    return lines.filter(line => {
      const { password, minOccurrences, maxOccurrences, letter } = getPasswordData(line)
      const firstIndex = minOccurrences - 1
      const secondIndex = maxOccurrences - 1

      return (password[firstIndex] === letter && password[secondIndex] !== letter)
        || (password[firstIndex] !== letter && password[secondIndex] === letter)
    }).length
  }

  function getPasswordData (line) {
    const [intervals, letterSection, password] = line.split(' ')
    const [minOccurrences, maxOccurrences] = intervals.split('-')
    const [letter] = letterSection

    return { password, minOccurrences, maxOccurrences, letter }
  }
}
