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
    const chatId = msg.chat.id

    if (msg.text === 'Закрыть') {
        bot.sendMessage(chatId, 'Закрываю клавиатуру', {
            reply_markup: {
                remove_keyboard: true,
            },
        })
    } else if (msg.text === 'Ответить') {
        bot.sendMessage(chatId, 'Отвечаю', {
            reply_markup: {
                force_reply: true,
            },
        })
    } else {
        bot.sendMessage(chatId, 'Клавиатура', {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: 'Отправить местоположение',
                            request_location: true,
                        },
                    ],
                    ['Ответить', 'Закрыть'],
                    [
                        {
                            text: 'Отправить контакт',
                            request_contact: true,
                        },
                    ],
                ],
                one_time_keyboard: true,
            },
        })
    }
})
