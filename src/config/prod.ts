import { config } from 'dotenv'
config()

const env = process.env.NODE_ENV
const url = process.env.HEROKU_URL
const token = process.env.TOKEN

export const pordConfig = {
  env,
  isProd: env === 'production',
  port: process.env.PORT,
  url,
  token
}
