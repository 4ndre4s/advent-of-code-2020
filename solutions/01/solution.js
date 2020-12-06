const fileUtil = require('../../util/fileUtil')
const SolutionOfDay = require('../../util/SolutionOfDay')

module.exports = async function () {
  const file = await fileUtil.getInputOfCurrentDay(__dirname)
  const listOfNumbers = fileUtil.getNonBlankLinesOfFile(file).map(Number)
  const uniqueNumbers = new Set(listOfNumbers)

  const EXPECTED_SUM = 2020

  const partOne = calculatePartOne()
  const partTwo = calculatePartTwo()

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

  function calculatePartTwo () {
    let product = 0
    let LENGTH = listOfNumbers.length
    for (let i = 0; i < LENGTH; i++) {
      for (let j = 0; j < LENGTH; j++) {
        for (let k = 0; k < LENGTH; k++) {
          const numI = listOfNumbers[i]
          const numJ = listOfNumbers[j]
          const numK = listOfNumbers[k]
          if (numI + numJ + numK === EXPECTED_SUM && numI * numJ * numK !== 0) {
            product = numI * numJ * numK
            LENGTH = 0
          }
        }
      }
    }
    return product
  }
}
