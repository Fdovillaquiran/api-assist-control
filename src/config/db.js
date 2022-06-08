import dotenv from 'dotenv'

dotenv.config()

const db = {
  database: process.env.DB_DATABASE || 'database',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'mysql',
}

export default db
