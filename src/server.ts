import * as express from 'express'
import { json, urlencoded } from 'body-parser'
import * as cors from 'cors'
import * as morgan from 'morgan'

import { botStart } from './bot'
import config from './config'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

botStart()

export const start = () => {
  const { port, env } = config
  try {
    app.listen(port, () => {
      console.log(`started in ${env} mode, on ${port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
