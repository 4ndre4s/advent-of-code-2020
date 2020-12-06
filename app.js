const fs = require('fs');

(async function main () {
  const solvedDays = await fs.promises.readdir('./solutions')
  solvedDays.forEach(solution => {
    require('./solutions/' + solution + '/solution.js')().then(solution => {
      console.log(solution.toString());
    })
  })
})()
