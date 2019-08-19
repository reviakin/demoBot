import dotenv from 'dotenv'

dotenv.config()
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  port: 3000
}

let envConfig = {}

switch (env) {
  case 'development':
    envConfig = baseConfig
    break
  case 'production':
    envConfig = require('./prod').pordConfig
    break
}

export default envConfig
