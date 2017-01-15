# meow-names

> Get popular names for your pet cat

![](myMolly.jpeg)


## Install

```
$ npm install --save meow-names
```


## Usages

```js
const meowNames = require('meow-names');

meowNames.random();
```

## CLI

```
$ npm install --global cat-names
```

```
$ cat-names --help

  Examples
    $ cat-names
    Max

    $ cat-names --all
    Abby
    Angel
    ...

  Options
    --all   Get all names instead of a random name
```


## API

### .all

Type: `array`

All cat names in alphabetical order.

### .random()

Type: `function`

Random cat name.
