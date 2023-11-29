const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    nome_produto: {
        type: DataTypes.STRING(100)
    },
    cod_produto: {
        type: DataTypes.STRING(50)
    },
    qtde_estoque: {
        type: DataTypes.INTEGER
    },
    cor: {
        type: DataTypes.STRING(50)
    },
    tamanho: {
        type: DataTypes.STRING(100)
    },
    preco: {
        type: DataTypes.FLOAT
    }
},{
    createdAt: false,
    updatedAt: false
})

// Produto.sync({force:true})

module.exports = Produto