const Sequelize = require('sequelize')

module.exports = {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
    },
}