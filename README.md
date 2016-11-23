# SafeImage
React Image Component with onError handling and optional fallback rendering of alternative child components

## Installation
```(bash)
npm install --save safeimage
```

## Usage Examples

```(jsx)
const SafeImage = require('safeimage')
...

<SafeImage />
/*
  Missing src prop.
  Render empty <div>
*/

<SafeImage src='404.png' style={myStyles} />
/*
  Image src does not exist.
  Renders empty <div>
  Omits other props
*/

<SafeImage src=''> <div>Alternative Rendering</div> </SafeImage>
/*
  Image src does not exist
  Children present
  Renders children
  Omits other props
*/

<SafeImage src='exiting.pmg' className={myClass} />
/*
  Existing src prop.
  Render as <img src={...} /> tag
  Decorate with props <img src={...} className={myClass} />
*/

<SafeImage src='404.png' onError={myErrorHandler} />
/*
  Custom error handler will fire if loading image fails
*/

```
