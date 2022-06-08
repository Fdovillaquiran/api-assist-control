import { Sequelize } from 'sequelize'
import db from '../config/db.js'

const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
})

const connectDB = async () => {
  return await sequelize
    //.authenticate() //validar conexion
    .sync({ force: false }) //force: true ->DROP TABLES
    .then(() => {
      console.log('Conection Mysql full')
    })
    .catch((err) => {
      console.error('ERROR', err)
    })
}

export { connectDB, sequelize }
