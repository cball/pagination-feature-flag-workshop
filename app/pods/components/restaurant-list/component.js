import Ember from 'ember';

/**
  {{restaurant-list restaurants=restaurants}}
*/
export default Ember.Component.extend({
  // restaurants: [],
  totalRows: 0,
  page: 1,
  perPage: 10,

  chartDataset: Ember.computed.map('restaurants', function(restaurant) {
    return {
      name: restaurant.get('name'),
      data: [1, 2, 18, 33]
    }
  }),

  categories: Ember.computed.mapBy('restaurants', 'name'),

  actions: {
    changePage(page) {
      this.sendAction('on-change-page', page);
    }
  }
});
