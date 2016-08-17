import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        category: this.get('category'),
        date: this.get('date'),
        tags: this.get('tags')
      };
      this.sendAction('save', params);
    }
  }
});
