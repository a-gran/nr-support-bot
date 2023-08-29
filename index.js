const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '6522253030:AAERyOphTX34pacqrJr8tCCMAG0euysYLBU'

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
    const html = `
		<i><strong>Hello, ${msg.from.first_name}</strong></i>
		<pre>${debug(msg)}</pre>
	`

    bot.sendMessage(msg.chat.id, html, {
        parse_mode: 'HTML',
    })
})
