import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/mysql.js'

//Using sequelize.define
/*
const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
)
*/

//Extending Model
class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
  }
)

export default User
