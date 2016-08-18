import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author'),
        category: this.get('category'),
        date: this.get('date'),
        tags: this.get('tags'),
        comments: this.get('comments')
      };
      this.sendAction('save', params);
    }
  }
});
