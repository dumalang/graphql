require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'forge' ,
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    migrationStorageTableName: 'sequelize_meta',
    define:{
      paranoid:false,
      timestamps:true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  },
  test: {
      username: process.env.DB_USERNAME || '',
      password: process.env.DB_PASSWORD || null,
      database: process.env.DB_DATABASE || 'forge' ,
      host: process.env.DB_HOST || '127.0.0.1',
      dialect: process.env.DB_DIALECT || 'mysql',
      migrationStorageTableName: 'sequelize_meta',
      define:{
          paranoid:false,
          timestamps:true,
          underscored: true,
          createdAt: 'created_at',
          updatedAt: 'updated_at',
          deletedAt: 'deleted_at',
      },
  },
  production: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'forge' ,
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    migrationStorageTableName: 'sequelize_meta',
    define:{
      paranoid:false,
      timestamps:true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};