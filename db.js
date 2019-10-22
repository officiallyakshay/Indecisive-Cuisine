const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4, ENUM } = Sequelize;

const conn = new Sequelize(process.env.PORT || 'postgres://localhost/indecisive_cuisine2');

const Restaurants = conn.define('restaurants', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cuisine: {
    type: ENUM('American', 'Mexican', 'Chinese', 'Japanese')
  },
  imageURL: {
    type: STRING(1234),
    defaultValue: 'https://digitallayout.files.wordpress.com/2013/02/recipe-book-cover14.jpg'
  }
});

const sync = async () => {
  await conn.sync({ force: false });
  // let restaurants = [
  //   {name: 'McDonalds', cuisine: 'American', imageURL: '' },
  //   {name: 'TacoBell', cuisine: 'Mexican', imageURL: '' },
  //   {name: 'PandaExpress', cuisine: 'Chinese', imageURL: '' },
  //   {name: 'Sushi', cuisine: 'Japanese', imageURL: '' },
  // ]
  // const [ McDonalds, TacoBell, PandaExpress, Sushi ] = await Promise.all(restaurants.map( restaurant => Restaurants.create(restaurant)));
}

module.exports = {
  sync,
  models: {
    Restaurants
  }
}