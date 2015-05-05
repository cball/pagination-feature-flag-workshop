import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('paginate-control', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('getNextPage works', function(assert) {
  let component = this.subject({
    page: 1,
    perPage: 5,
    totalRows: 20
  });

  let nextPage = component._getNextPage();
  assert.equal(nextPage, 2);
});

test('getNextPage returns undefined if no next page', function(assert) {
  let component = this.subject({
    page: 1,
    perPage: 5,
    totalRows: 5
  });

  let nextPage = component._getNextPage();
  assert.equal(nextPage, undefined);
});
