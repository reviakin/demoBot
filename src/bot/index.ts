import * as Telegrambot from 'node-telegram-bot-api'
import { config } from 'dotenv'

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
  } catch (e) {
    console.error(e)
  }
}
