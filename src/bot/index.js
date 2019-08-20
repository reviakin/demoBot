import TB from 'node-telegram-bot-api'
import dotenv from 'dotenv'

dotenv.config()
const token = process.env.TOKEN
/**
 *  !get token from process.env variable
 */
const bot = new TB(token, { polling: true })

export const botStart = async () => {
  try {
    /**
     *  !Bot send message if user didn't ask or answer to question
     */

    bot.on('message', msg => {
      console.log(msg)
      if (
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
          `Dear ${msg.from.username}, please ask a question, answer or write to the user.`
        )
      }
    })
  } catch (e) {
    console.error(e)
  }
}
