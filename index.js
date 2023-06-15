const { convertToAmharic }=require('amharic-converter');
const express = require('express')
const app = express()
const port = process.env.PORT ||3000

app.get('/amharic', (req, res) => {

    const amharicResult = convertToAmharic("Mnm alatefahm ene gn normal mehon alichalkum kayewuk bohala kelela gizew belay kante gar mhon eyfelku nw yh dgmo lik aydlm Tilk sew nesh enem endezaw demo mnm endemanidebabek neber masibew beza lay mnm tenegagiren meftat miyakiten neger aynorm drsha pls anch endih stihognibgn dess ayilm", {
       includeNumbers: false, 
       enhance: false, 
})
console.log(amharicResult);
res.send(amharicResult)

})
app.get('/', (req, res) => { 
    res.send('Hello World!')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})