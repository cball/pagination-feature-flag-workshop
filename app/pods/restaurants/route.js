import Ember from 'ember';

export default Ember.Route.extend({
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
    controller.set('metadata', restaurants.meta);
  }
});
