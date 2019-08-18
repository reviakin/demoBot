import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(morgan())

app.listen(3000, () => {
  console.log(`server start on 3000`)
})
