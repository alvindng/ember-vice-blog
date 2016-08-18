import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  updateCommentForm: false,

  actions: {
    showCommentForm() {
      this.set('addNewComment', true);
    },

    addComment() {
      var params = {
        name: this.get('name'),
        email: this.get('email'),
        description: this.get('description'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction("addComment", params);
    },

    delete(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
    //
    // showUpdateForm() {
    //   this.set('updateCommentForm', true);
    // },
    //
    // update(comment) {
    //   var params = {
    //     name: this.get('name1'),
    //     email: this.get('email1'),
    //     description: this.get('description1'),
    //     post: this.get('post')
    //   };
    //   this.set('updateCommentForm', false);
    //   this.sendAction('update', comment, params);
    // }
  }
});
