const { convertToAmharic }=require('amharic-converter');
const express = require('express')
const TelegramBot = require('node-telegram-bot-api');
const app = express()
const port = process.env.PORT ||3000

const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, msg);
// });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message',async (msg) => {
  const chatId = msg.chat.id;
const amharicResult =await convertToAmharic(msg.text, {
  includeNumbers: false, 
  enhance: false, 
})
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, amharicResult["convertedText"]);
});
app.get('/amharic', (req, res) => {

    const amharicResult = convertToAmharic("Mnm alatefahm ene gn normal mehon alichalkum kayewuk bohala kelela gizew belay kante gar mhon eyfelku nw yh dgmo lik aydlm Tilk sew nesh enem endezaw demo mnm endemanidebabek neber masibew beza lay mnm tenegagiren meftat miyakiten neger aynorm drsha pls anch endih stihognibgn dess ayilm", {
       includeNumbers: false, 
       enhance: false, 
})
res.send(amharicResult["convertedText"])

})
app.get('/', (req, res) => { 
    res.send('Hello World!')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})