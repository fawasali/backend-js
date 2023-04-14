const { Model, DataTypes} = require('sequelize')

class User extends Model { }

User.inti({
    nip: {
        type: DataTypes.INTEGER,
        unique: true
    },
    nama: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})