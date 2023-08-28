const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '6522253030:AAERyOphTX34pacqrJr8tCCMAG0euysYLBU'

const bot = new TelegramBot(TOKEN, {
  polling: true,
})

bot.on('message', (msg) => {
  console.log(msg)
  bot.sendMessage(msg.chat.id, 'Hello ' + msg.from.first_name)
})
