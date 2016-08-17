import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,
  actions: {
    updatePostFormShow() {
      this.set('updatePost', true);
    },
    update(post) {
      var params = {
        title: this.get("title"),
        body: this.get("body"),
        category: this.get("category"),
        date: this.get("date"),
        tags: this.get("tags")
      };
      this.set('updatePost', false);
      this.sendAction('update', post, params);
      // debugger;
    }
  }
});
