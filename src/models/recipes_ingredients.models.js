const { DataTypes } = require('sequelize')
const db = require('../tools/database')
const Recipes = require('../models/recipes.models')
const Ingredients = require('../models/ingredients.models')


const RecipesIngredients = db.define('recipes_ingredients', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            model: Recipes
        }
    },
    ingredientsId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'ingredients:id',
        references: {
            key: 'id',
            model: Ingredients
        }
    }
})

module.exports = RecipesIngredients