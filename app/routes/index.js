import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('post', {limitToFirst : 2});
  }
});
