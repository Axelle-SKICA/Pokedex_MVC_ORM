require("dotenv/config");

const { Sequelize } = require('sequelize');

// instance de connexion à la BDD PostgreSQL
const sequelize = new Sequelize(`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
  dialect: "postgres",
  define: {
    createdAt: "created_at", 
    updatedAt: "updated_at" 
  }
});

module.exports = sequelize;