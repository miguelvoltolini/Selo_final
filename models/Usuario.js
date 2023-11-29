const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('usuario', {
    nome: {
        type: DataTypes.STRING(50)
    },
    sobrenome: {
        type: DataTypes.STRING(50)
    },
    cpf: {
        type: DataTypes.STRING(15)
    },
    telefone: {
        type: DataTypes.STRING(50)
    },
    email: {
        type: DataTypes.STRING(100)
    },
    senha: {
        type: DataTypes.STRING(255)
    },
    tipo: {
        type: DataTypes.STRING(50)
    },
},{
    createdAt: false,
    updatedAt: false
})

// Usuario.sync({force:true})

module.exports = Usuario