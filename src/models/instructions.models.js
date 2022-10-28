const { DataTypes } = require('sequelize')
const db = require('../tools/database')
const Recipes = require('./recipes.models')


const Instructions = db.define('instructions', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    step: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: Recipes
    }
})

module.exports = Instructions