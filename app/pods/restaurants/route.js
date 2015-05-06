import Ember from 'ember';

export default Ember.Route.extend({
  favoriteRestaurantService: Ember.inject.service('favorite-restaurant'),

  queryParams: {
    page: {
      refreshModel: true
    },
    per_page: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.findQuery('restaurant', {
      page: params.page,
      per_page: params.per_page
    });
  },

  afterModel(restaurants) {
    let controller = this.controllerFor('restaurants');
    let service = this.get('favoriteRestaurantService');
    let favorite = restaurants.get('firstObject');

    controller.set('metadata', restaurants.meta);
  }
});
