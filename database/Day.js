const {Model, DataTypes} = require('sequelize');
const sequelize = require('./database')


   
class Day extends Model {}

Day.init(
    {  
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        mes: {
            type: DataTypes.INTEGER
        },
        dia: {
            type: DataTypes.INTEGER
        },
        inhabil: {
            type: DataTypes.BOOLEAN
        },
        razon: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        modelName: 'day',
        timestamps: false,
    }
    )



module.exports = Day
