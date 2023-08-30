const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '6522253030:AAERyOphTX34pacqrJr8tCCMAG0euysYLBU'

console.log('Bot is running...')

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
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, `https://core.telegram.org/bots/api`, {
            disable_web_page_preview: true,
            disable_notification: true,
        })
    }, 4000)
})
