import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

import { botStart } from './bot'
import config from './config'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
botStart()
var port = 'https://demo-rd-bot.herokuapp.com/'
export const start = async () => {
  try {
    // app.listen(config.port, () => {
    //   console.log(`started in ${config.env} mode, on ${config.port}`)

    app.listen(port)
  } catch (e) {
    console.error(e)
  }
}
