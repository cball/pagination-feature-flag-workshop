import Ember from 'ember';

export default Ember.Component.extend({
  favoriteRestaurantService: Ember.inject.service('favorite-restaurant'),

  actions: {
    favorite(restaurant) {
      let service = this.get('favoriteRestaurantService');
      service.setFavorite(restaurant);
    }
  }
});
