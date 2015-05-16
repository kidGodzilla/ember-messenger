export function initialize(container, application) {
  application.inject('route', 'Messenger', 'service:messenger');
  application.inject('controller', 'Messenger', 'service:messenger');
}

export default {
  name: 'services',
  initialize: initialize
};
