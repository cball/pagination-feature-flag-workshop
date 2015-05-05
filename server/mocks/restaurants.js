module.exports = function(app) {
  var express = require('express');
  var restaurantsRouter = express.Router();
  var list = require('./data/restaurants.json');

  restaurantsRouter.get('/', function(req, res) {
    var perPage = parseInt(req.query.per_page);
    var page = parseInt(req.query.page);
    var start = page * perPage - perPage;
    var end = start + perPage;
    var restaurants;

    if (perPage > 0) {
      restaurants = list.slice(start, end);
    } else {
      restaurants = list;
    }

    res.send({
      restaurants: restaurants,
      meta: {
        total_rows: list.length
      }
    });
  });

  restaurantsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  restaurantsRouter.get('/:id', function(req, res) {
    res.send({
      'restaurants': {
        id: req.params.id
      }
    });
  });

  restaurantsRouter.put('/:id', function(req, res) {
    res.send({
      'restaurants': {
        id: req.params.id
      }
    });
  });

  restaurantsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/restaurants', restaurantsRouter);
};
