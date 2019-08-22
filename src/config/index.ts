import { config } from 'dotenv'

config()
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  port: 3000
}

interface IEnvConfig {
  env?: string
  isDev?: boolean
  port?: number
}

let envConfig: IEnvConfig = {}

switch (env) {
  case 'development':
    envConfig = baseConfig
    break
  case 'production':
    envConfig = require('./prod').pordConfig
    break
}

export default envConfig
