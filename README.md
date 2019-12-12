# Pad-Text
Offering a simple, lightweight text padding module that allows both left and right padding.

## Minimal Use
```
const padText = require('pad-text');
let paddedText = padText("AMD", 5);
console.log(paddedtext);

>  "  AMD"

```

## Options
The first two arguments of the padText function are required.  The first being the string that may be padded and the second argument being the amount of padding to introduce.

The third argument allows you to substitute which character you'd like to pad with.  By default, padding is a space.  This comes in handy for various use cases like when you may want to pad with a period (".").

The fourth and last argument is a boolean which represents whether the padding should be added to the start or the end of the provided string.  It defaults to adding the padding to the start, but passing in a falsey value for this argument will allow you to pad on the end of the string.
