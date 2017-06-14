# Model
* **Tiny** Unminified filesize is ~350 bytes
* **Extensible** Its a small class that you can easily extend with ES6
* **Easy to use** Simply call getters & setters 

## Notice
Be aware, this project is only written for ES6+ clients at the moment.

For a list of supported browsers, check the [mdn browser compatability list](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Browser_compatibility) for ES6 classes

If you require any eventing etc, you can extend the class & bake in your own events, or try out another model system ([backbone-model](https://www.npmjs.com/package/backbone-model) is avaliable as a standalone module on npm)

## API

### ES6
```js
// Import the dependency
import Model from '@jakejarrett/model';

// Initialize the model with some values
const MyModel = new Model({ username: 'jake', id: 0 });

// Get the current username
MyModel.get('username'); // returns "jake"

// Lock the current state of the model
const model = MyModel.freze();

// Updates the model
MyModel.set('username', 'not jake');

// Model & frozen model are not the same
MyModel.get('username') === model.username; // False

```

## Documentation

### get
The `get` function takes a **string** parameter.

It returns either `undefined` if the value could not be found, or the value you stored under that key.

```js
// Correct
MyModel.get('hello')

```

### set

The `set` value takes 2 paramaters

The first being a **string** parameter, which is used for the `get` lookup.

The second being any type you wish to set.

```js
MyModel.set('hello', {
    world: {
        nested: 'objects'
    }
});
```

### freeze
A simple function that returns a "frozen" object (Think diverged)

Useful for state comparison & preventing mutation of your object reference

```js
MyModel.set('user', { name: 'jake', id: 0 });

const divergePoint = MyModel.freeze();

MyModel.set('user', { name: 'not jake', id: 1 });

// Will fail
MyModel.get('user').name === divergePoint.user.name;

```

### isNew
A simple function to check if the model is new (the existence of the id attribute)

```js
MyModel.isNew(); // true

MyModel.set('id', 0);

MyModel.isNew(); // false
```