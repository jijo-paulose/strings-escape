
> strings-escape


## Install

```
$ npm install --save strings-escape
```


## Usage

```js
const stringEscape = require('strings-escape');

const convertedString = stringEscape('Remove special $ characters in RegExp');

//=> 'Remove special \$ characters in RegExp'

new RegExp(convertedString);

```


## License

MIT © [Jijo Paulose]
