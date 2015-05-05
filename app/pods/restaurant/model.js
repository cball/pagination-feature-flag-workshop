import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),

  image: Ember.computed('id', function() {
    let id = this.get('id');
    return `http://lorempixel.com/64/64/food/?${id}`;
  })
});
