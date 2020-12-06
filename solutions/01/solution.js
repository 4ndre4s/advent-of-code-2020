const fs = require('fs')
const SolutionOfDay = require('../../SolutionOfDay')

module.exports = async function () {
  const file = await fs.promises.readFile(__dirname + '/input.txt')
  const listOfNumbers = file.toString().split('\r\n').map(Number)
  const uniqueNumbers = new Set(listOfNumbers)

  const EXPECTED_SUM = 2020
  let factor1 = 0
  let factor2 = 0
  listOfNumbers.some(number => {
      const candidate = EXPECTED_SUM - number
      const numbersContainCandidate = uniqueNumbers.has(candidate)
      if (!numbersContainCandidate) {
        return false
      }
      factor1 = candidate
      factor2 = number
      return true
    })

  return new SolutionOfDay("01", factor1 * factor2)
}
