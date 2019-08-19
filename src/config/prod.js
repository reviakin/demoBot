import dotenv from 'dotenv'
dotenv.config()
const env = process.env.NODE_ENV

export const pordConfig = {
  env,
  isDev: env === 'production',
  port: 'https://demo-rd-bot.herokuapp.com/'
}
