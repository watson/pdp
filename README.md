# pdp === PHP Dump Parser

Node.js parser of PHP var dumps.

[![build
status](https://secure.travis-ci.org/watson/pdp.png)](http://travis-ci.org/watson/pdp)

## Install

```
npm install pdp
```

## Usage (or what is a PHP dump?)

Given a variable, the PHP function [print_r](http://www.php.net/print_r)
will print human-readable information about the variable. This is best
illustrated with an example:

```php
<pre>
<?php
$a = array ('a' => 'apple', 'b' => 'banana', 'c' => array ('x', 'y', 'z'));
print_r ($a);
?>
</pre>
```

The above example will output:
```html
<pre>
Array
(
    [a] => apple
    [b] => banana
    [c] => Array
        (
            [0] => x
            [1] => y
            [2] => z
        )
)
</pre>
```

Feed the above output inside the `<pre>` tags to this module and you get
a nice JavaScript object literal or Array:

```javascript
var pdp = require('pdp');
var dump = '...'; // let's imagine we have the entire Array(...) dump here
console.log(pdp(dump)); // prints: { a: 'apple', b: 'banana', c: [ 'x', 'y', 'z' ] }
```

## License

MIT
