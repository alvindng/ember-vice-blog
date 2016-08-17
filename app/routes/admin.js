import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    delete(post){
      if (confirm('Are you sure you want to delete this post?')) {
        post.destroyRecord();
        this.transitionTo('admin');
      }
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    }
  }
});
