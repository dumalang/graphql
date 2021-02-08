const timestampFields = (sequelize, DataTypes) => ({
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
})

module.exports = timestampFields