const Sequelize = require('sequelize')

module.exports = {
    created_by: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
            model: {
                tableName: 'users',
            },
            key: 'id',
        },
        allowNull: true,
        defaultValue: null
    },
    updated_by: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
            model: {
                tableName: 'users',
            },
            key: 'id',
        },
        allowNull: true,
        defaultValue: null
    },
    deleted_by: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
            model: {
                tableName: 'users',
            },
            key: 'id',
        },
        allowNull: true,
        defaultValue: null
    },
}