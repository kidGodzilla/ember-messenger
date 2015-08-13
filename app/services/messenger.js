import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    Messenger.options = {
      extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
      theme: 'air'
    }
  },

  setup(options) {
    Messenger.options = Ember.$.extend({}, Messenger.options, options);
    return options;
  },

  post(args) {
    Messenger().post(args);
  },

  error(args) {
    Messenger().error(args);
  },

  info(args) {
    Messenger().info(args);
  },

  success(args) {
    Messenger().success(args);
  },

  run(args) {
    Messenger().run(args);
  },

  hideAll() {
    Messenger().hideAll();
  }
});
