const { DataTypes } = require('sequelize')
const db = require('../tools/database')
const Types = require('../models/types.models')

const Ingredients = db.define('ingredients', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'type_id',
        references: {
            key: 'id',
            model: Types
        }
    },
    urlImg: {
        type: DataTypes.INTEGER,
        field: "url_img",
        validate: {
          isUrl: true,
        }
      }
    },
    { timestamps: false }
  )
  
  module.exports = Ingredients
  