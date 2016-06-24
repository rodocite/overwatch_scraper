const Sequelize = require('sequelize')
const db = require('../db.config.js')

const Hero = db.define('heroes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
},
{ timestamps: false });

Hero.sync().then(() => {
  Hero.describe().then(table => console.log('\n', table));
});

module.exports = Hero;
