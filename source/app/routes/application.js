import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {

    var self = this;

    this.Messenger.post("I am a happy little duckling.");

    Ember.run.later(function () {

      self.Messenger.post("Listen to me Quack.");

      self.Messenger.setup({
        extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
        theme: 'flat'
      });

      Ember.run.later(function () {

        self.Messenger.post("Quack Quack Quack.");

        Ember.run.later(function () {

          self.Messenger.post({
            message: 'ERROR: There was an explosion while processing your quack.',
            type: 'error',
            showCloseButton: true
          });

        }, 4000);
      }, 1800);
    }, 2300);

  }
});
