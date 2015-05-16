/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-messenger',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/messenger/build/js/messenger.min.js');
    app.import(app.bowerDirectory + '/messenger/build/js/messenger-theme-flat.js');
    app.import(app.bowerDirectory + '/messenger/build/js/messenger-theme-future.js');

    app.import(app.bowerDirectory + '/messenger/build/css/messenger.css');
    app.import(app.bowerDirectory + '/messenger/build/css/messenger-spinner.css');
    app.import(app.bowerDirectory + '/messenger/build/css/messenger-theme-air.css');
    app.import(app.bowerDirectory + '/messenger/build/css/messenger-theme-block.css');
    app.import(app.bowerDirectory + '/messenger/build/css/messenger-theme-flat.css');
    app.import(app.bowerDirectory + '/messenger/build/css/messenger-theme-future.css');
    app.import(app.bowerDirectory + '/messenger/build/css/messenger-theme-ice.css');
  }
};
