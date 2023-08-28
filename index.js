const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '6606993976:AAGgYN_4-VMc_zi1IX5gAzEZOJvl2Pgt-Mk'

const bot = new TelegramBot(TOKEN, {
  polling: true,
})

bot.on('message', (msg) => {
  console.log(msg)
  bot.sendMessage(msg.chat.id, 'Hello')
})
