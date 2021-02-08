'use strict'

const mergeObjects = require('lodash.merge')
const baseModelConfig = require('../static/base_model_config')

module.exports = (sequelize, DataTypes) => {
    const idFields = require('../static/ids_fields')(sequelize,
        DataTypes)

    const Awb = sequelize.define('Awb', mergeObjects(
        {},
        idFields,
        {
            awb: DataTypes.STRING,
            used_at: {
                type: DataTypes.DATE,
                defaultValue: null,
            },
        }), baseModelConfig)

    Awb.associate = function (models) {
        // associations can be defined here
    }

    Awb.beforeCreate(function (awb, options) {
        return awb
    })

    return Awb
}