const express = require('express');
const path = require('path');
const app = express();
const db = require('../db');
const { models: { Restaurants } } = require('../db');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/api/restaurants', async ( req, res, next ) => {
  const restaurants = await Restaurants.findAll();
  res.send(restaurants)
});

app.post('/api/restaurants', async ( req, res, next ) => {
  try {
    const restaurant = await Restaurants.create(req.body);
    res.send(restaurant);
  }
  catch(ex) {
    next(ex);
  }
});

app.delete('/api/restaurants/:id', async ( req, res, next ) => {
  try {
    await Restaurants.destroy({ where: {id: req.params.id} });
    res.sendStatus(201);
  }
  catch(ex) {
    next(ex);
  }
});

db.sync()
  .then(() => {
app.listen(port, ()=> console.log(`listening on port ${port}`));
})