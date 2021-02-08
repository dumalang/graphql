'use strict';
const mergeObjects = require('lodash.merge')
const idFields = require('./static/id_fields')
const timestampFields = require('./static/timestamp_fields')

module.exports = {
    up: (queryInterface, Sequelize) => {
        const awbs = mergeObjects(
            {},
            idFields,
            {
                awb: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                used_at: {
                    type: Sequelize.DATE,
                    allowNull: true,
                    defaultValue: null,
                },
            }, timestampFields)

        return queryInterface.createTable('awbs', awbs)
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('awbs')
    }
};
