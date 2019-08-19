import TB from 'node-telegram-bot-api'
import { TOKEN } from '../../token'

const bot = new TB(TOKEN, { polling: true })

export const botStart = async () => {
  try {
    /**
     *  Bot send message if user didn't ask or answer to question
     */

    bot.on('message', msg => {
      if (
        !msg.text
          .toString()
          .toLowerCase()
          .includes('?') &&
        !msg.reply_to_message
      ) {
        bot.sendMessage(
          msg.chat.id,
          'Please ask a question or answer a user message'
        )
      }
    })
  } catch (e) {
    console.error(e)
  }
}
