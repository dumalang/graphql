const Sequelize = require('sequelize')

module.exports = {
    created_at: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
    },
}