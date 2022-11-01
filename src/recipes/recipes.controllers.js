const uuid = require('uuid')
const Recipes = require('../models/recipes.models')

const showAllRecipes = async ()=> {
    const data = await Recipes.findAll()
    return data
}

const showRecipeById = async (id)=> {
    const data = await Recipes.findOne({
        where: {
            id
        }
    })
    return data
}

const createRecipe = async (data)=> {
    const response = await Recipes.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        urlImg: data.urlImg,
        time: data.time,
        portions: data.portions,
        userId: data.userId,
        categoryId: data.categoryId,
        origin: data.origin,
        likes: data.likes
    })
    return response
}

const updateRecipe = async (id, data)=> {
    const response = await Recipes.update(data, {
        where: id
    })
    return response
}

const deleteRecipe = async (id)=> {
    const data = await Recipes.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    showAllRecipes,
    showRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}

