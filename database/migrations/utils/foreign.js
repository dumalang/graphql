const Sequelize = require('sequelize')

module.exports = (
  field, referenceTable, referenceField = 'id', allowNull = false) => {
  const result = {}

  result[field] = {
    type: Sequelize.BIGINT.UNSIGNED,
    references: {
      model: {
        tableName: referenceTable,
      },
      key: referenceField,
    },
    allowNull,
  }

  return result

}