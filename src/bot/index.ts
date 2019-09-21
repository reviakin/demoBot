import * as Telegrambot from 'node-telegram-bot-api'
import { config } from 'dotenv'

import envConfig from '../config'

config()

let token = ''
if (process.env.TOKEN) {
  token = process.env.TOKEN
}
/**
 *  !get token from process.env variable
 */
const bot = new Telegrambot(token, { polling: true })

export const botStart = async () => {
  try {
    /**
     *  !Bot to reply if user didn't ask or didn't contact the user
     */
    if (envConfig.isProd && envConfig.token && envConfig.url) {
      bot.setWebHook(envConfig.url + envConfig.token)
    } else {
      bot.deleteWebHook()
    }
    bot.on('message', msg => {
      console.log(msg)
      if (
        msg.text &&
        msg.from &&
        !msg.text
          .toString()
          .toLowerCase()
          .includes('?') &&
        !msg.text
          .toString()
          .toLowerCase()
          .includes('@') &&
        !msg.reply_to_message
      ) {
        bot.sendMessage(
          msg.chat.id,
          `Dear @${msg.from.username}, please ask a question, answer or write to the user.`,
          { reply_to_message_id: msg.message_id }
        )
      }
    })
    bot.on('new_chat_members', nMember => {
      bot.sendMessage(nMember.chat.id, `Welcome to our chat.`)
    })
  } catch (e) {
    console.error(e)
  }
}
