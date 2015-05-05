import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('restaurants');
  this.route('restaurant', { path: '/restaurants/:restaurant_id'});
});
