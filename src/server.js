import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

import { botStart } from './bot'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(morgan())
botStart()

export const start = async () => {
  try {
    app.listen(3000, () => {
      console.log(`started on 3000`)
    })
  } catch (e) {
    console.error(e)
  }
}
