const Users = require('./users.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Recipes = require('./recipes.models')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')

const initModels = ()=> {
    // -- hasMany llave foranea dentro del parentesis -- //
    // -- belongsTo llave foranea en primer parametro -- //
    // -- Users 1:M Recipes -- // ok
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    // -- Users 1:M UserRecipes -- // ok
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    // -- Recipes 1:M UserRecipes -- // ok
    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    // -- Users 1:M UserIngredients -- // ok
    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    // -- Ingredients 1:M UserIngredients -- // ok
    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

    // -- Recipes M:1 Categories -- // ok
    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    // -- Ingredients M:1 Types -- // ok
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    // -- Recipes 1:M RecipesIngredients -- // ok
    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    // -- Ingredients 1:M RecipesIngredients -- //
    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)

    // -- Recipes 1:M Instructions -- //
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)
}

module.exports = initModels