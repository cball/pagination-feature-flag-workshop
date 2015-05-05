import Ember from 'ember';

/**
  {{restaurant-list restaurants=restaurants}}
*/
export default Ember.Component.extend({
  restaurants: [],
  totalRows: 0,
  page: 1,
  perPage: 10,

  actions: {
    changePage(page) {
      this.sendAction('on-change-page', page);
    }
  }
});
