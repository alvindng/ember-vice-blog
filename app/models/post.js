import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  category: DS.attr(),
  date: DS.attr(),
  tags: DS.attr()
});