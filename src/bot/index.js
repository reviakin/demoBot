import TB from 'node-telegram-bot-api'
import { TOKEN } from '../../token'

const bot = new TB(TOKEN, { polling: true })

export const botStart = async () => {
  try {
    bot.on('message', msg => {
      const Hi = 'hi'
      if (
        msg.text
          .toString()
          .toLowerCase()
          .indexOf(Hi) === 0
      ) {
        bot.sendMessage(msg.chat.id, 'Hello dear user')
      }
    })
  } catch (e) {
    console.error(e)
  }
}
