'use strict'
const mergeObjects = require('lodash.merge')
const idFields = require('./static/id_fields')
const timestampFields = require('./static/timestamp_fields')

module.exports = {
  up: (queryInterface, Sequelize) => {

    const users = mergeObjects(
      {},
      idFields,
      {
        email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        activation_code: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.ENUM,
          values: ['inactive', 'activated', 'deactivated'],
          allowNull: false,
          defaultValue: 'inactive',
        },
        activated_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: null,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      }, timestampFields)

    return queryInterface.createTable('users', users)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  },
}
