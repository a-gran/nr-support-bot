const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '6522253030:AAERyOphTX34pacqrJr8tCCMAG0euysYLBU'

console.log('Starting bot...')

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
})

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'I am alive!!!') // test
})
