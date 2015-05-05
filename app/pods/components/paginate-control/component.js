import Ember from 'ember';

/**
 {{paginate-control page=30}}

 Defaults:
   page: 1
   per
*/
export default Ember.Component.extend({
 page: 1,
 perPage: 30,
 totalRows: 0,

 classNames: ['pagination-container'],
 isFirstPage: Ember.computed.equal('page', 1),
 isLastPage: Ember.computed('page', function() {
   return Ember.isEmpty(this._getNextPage());
 }),

 onlyOnePage: Ember.computed.and('isFirstPage', 'isLastPage'),

 actions: {
   nextPage() {
     var page = this._getNextPage();

     if (page) {
       this.sendAction('changePage', page);
     }
   },

   previousPage() {
     var page = this._getPreviousPage();

     if (page) {
       this.sendAction('changePage', page);
     }
   }
 },

 _getNextPage() {
   var page = parseInt(this.get('page')) + 1;
   var lastPage = Math.ceil(this.get('totalRows') / this.get('perPage'));

   if (page <= lastPage) {
     return page;
   }
 },

 _getPreviousPage() {
   var page = parseInt(this.get('page')) - 1;

   if (page >= 1) {
     return page;
   }
 }

});
