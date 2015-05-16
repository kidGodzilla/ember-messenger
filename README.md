# Ember-messenger

Ember-messenger is an ember-cli addon for Hubspot Messenger that allows you to easily add Hubspot Messenger to your Ember App.

<img src="http://i.imgur.com/qf6weQP.png">

Messenger is a simple way to display stylish transactional messages in your app.

## Demo

http://ember-messenger.divshot.io/

## Installation

If you are running ember-cli >= 0.2.3, From within your application you can run:

```bash
ember install ember-messenger
```

#### ember-cli 0.1.5 - 0.2.2 Installation

If you are running ember-cli 0.1.5 - 0.2.2 , From within your application you can run:

```bash
ember install:addon ember-messenger
```

#### Installation without ember-cli

* `git clone` this repository
* `npm install`
* `bower install`

## Usage

The ember-messenger addon adds hubspot messenger via bower, then injects a service into all of your routes and controllers.

After installing, you can access any of the following methods from inside your application's routes and controllers:

#### this.Messenger.setup()

Changes or initializes Messenger settings. Optional.

Example:

    this.Messenger.setup({
        extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
        theme: 'flat'
    });

See http://github.hubspot.com/messenger/#messenger-object

#### this.Messenger.post

Creates a new Messenger message.

Example: 

    this.Messenger.post("I am a happy little duckling.");

See http://github.hubspot.com/messenger/#messenger-object

#### this.Messenger.hideAll()

Hides all Messenger messages currently being displayed.

Example:

    this.Messenger.hideAll();

## Development

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


## More Information

Hubspot Messenger: http://github.hubspot.com/messenger/
