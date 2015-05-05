import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'restaurant-list/tests/helpers/start-app';
import RestaurantsController from 'restaurant-list/pods/restaurants/controller';

RestaurantsController.reopen({
  per_page: 2
});

var application, server;

module('Acceptance: UserViewsRestaurant', {
  beforeEach: function() {
    application = startApp();
    server = createServer();

    server.get('/api/restaurants', function(request) {
      let page = request.params.page;
      let restaurants;

      if (page === 1) {
        restaurants = [
          {id: 1, name: 'House of Meat'},
          {id: 2, name: 'Spicy Soups'}
        ];
      } else {
        restaurants = [
          {id: 1, name: 'Tacos'},
          {id: 2, name: 'RostiPollos'}
        ];
      }

      var list = {
        restaurants: restaurants,
        meta: {
          total_rows: 5
        }
      };

      return [200, {}, list];
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('User views restaurants', function(assert) {
  withFeature('show-pagination');
  visit('/restaurants');
  click('.pagination a:contains(Next)');

  andThen(function(){
    let url = currentURL();
    assert.equal(url, '/restaurants?page=2');
    assert.ok(find('.test-restaurant:contains(RostiPollos)'));
  });
});
