const fs = require('fs')
const SolutionOfDay = require('../../SolutionOfDay')

module.exports = async function () {
  const file = await fs.promises.readFile(__dirname + '/input.txt')
  const listOfNumbers = file.toString().split('\r\n').map(Number)
  const uniqueNumbers = new Set(listOfNumbers)

  const EXPECTED_SUM = 2020

  const partOne = calculatePartOne()

  return new SolutionOfDay(1, partOne, partTwo)

  function calculatePartOne () {
    let product = 0
    listOfNumbers.some(number => {
      const candidate = EXPECTED_SUM - number
      const numbersContainCandidate = uniqueNumbers.has(candidate)
      if (!numbersContainCandidate) {
        return false
      }
      product = number * candidate
      return true
    })
    return product
  }
}
