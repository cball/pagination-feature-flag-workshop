import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'per_page'],
  page: 1,
  per_page: 30,
  favoriteRestaurantService: Ember.inject.service('favorite-restaurant'),

  favoriteRestaurant: Ember.computed('favoriteRestaurantService._restaurant', function() {
    let service = this.get('favoriteRestaurantService');

    return service.getFavorite();
  }),

  // init() {
  //   // remember to always add this!
  //   this._super.apply(this, arguments);
  // },

  actions: {
    changePage(page) {
      this.set('page', page);
    }
  }
});
