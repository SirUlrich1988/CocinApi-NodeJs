const Categories = require('../models/categories.models')

// -- Ver todas las categorias -- //
// -- Ver todas las categoria en especifico -- //
// -- Crear una categoria -- //
// -- Eliminar una categoria -- //

const showAllCategories = async ()=> {
    const data = await Categories.findAll()
        return data
}

const showCategoryById = async (id)=> {
    const data = await Categories.findOne({

    })
}

const createCategory = async (name) => {
    const data = await Categories.create({
        name
    })
    return data
}

const removeCategory = async (id) => {
    const data = await Categories.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    showAllCategories,
    showCategoryById,
    createCategory,
    removeCategory
}

