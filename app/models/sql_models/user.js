'use strict'

const mergeObjects = require('lodash.merge')
const baseModelConfig = require('../static/base_model_config')

module.exports = (sequelize, DataTypes) => {
    const idFields = require('../static/ids_fields')(sequelize,
        DataTypes)

    const User = sequelize.define('User', mergeObjects(
        {},
        idFields,
        {
            email: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            activation_code: DataTypes.STRING,
            status: {
                type: DataTypes.ENUM,
                values: ['inactive', 'activated', 'deactivated'],
                defaultValue: 'inactive',
            },
            activated_at: {
                type: DataTypes.DATE,
                defaultValue: null,
            },
        }), baseModelConfig)

    User.associate = function (models) {
        // associations can be defined here
    }

    User.beforeCreate(function (user, options) {
        return user
    })

    return User
}