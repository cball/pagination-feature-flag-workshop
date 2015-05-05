import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import 'ember-feature-flags/tests/helpers/with-feature';

setResolver(resolver);
