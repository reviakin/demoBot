import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

import config from './config'
import { botStart } from './bot'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
botStart()

export const start = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`started in ${config.env} mode, on ${config.port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
