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
    const markdown = `
		*Hello, ${msg.from.first_name}!*
		_Italic text_
	`

    bot.sendMessage(msg.chat.id, markdown, {
        parse_mode: 'Markdown',
    })
})
