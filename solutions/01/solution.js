const fs = require('fs')
const fsAsync = fs.promises
const SolutionResponse = require('../../SolutionOfTask')

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
    }
  )
  return new SolutionResponse("01", factor1 * factor2)
}
