import Ember from 'ember';

export default Ember.Service.extend({

  setFavorite(restaurant) {
    this.set('_restaurant', restaurant);
    this._saveFavorite();
  },

  _saveFavorite() {
    // api call
  },

  getFavorite() {
    return this.get('_restaurant');
  }


});
