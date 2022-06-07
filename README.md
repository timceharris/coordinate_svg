# Coordinate SVG

Coordinate SVG is a simple package that will allow you to tranform any set of coordinates into SVG XML.

# Installation

`npm i coordinate_svg`

# Usage

Import Module:

`const svg = require('coordinate_svg')`

Format Coordinates:

`const coordinates = [[x,y],[x,y],[x,y] ...  ]`

Convert to SVG:

`svg.createSVG(coordinates, height, width)`

> Coordinate SVG will return the resulting svg as raw XML, which can then be saved in a .svg file or utilised further. 

# Example

```const fs = require('fs');
const svg = require('coordinate_svg')

const coordinates = [[50,50],[50,100],[250,100],[250,50]]

var xml = svg.createSVG(coordinates, 150, 300)

fs.appendFile('example.svg', xml, () => {})
```

The above program will create the following file - 'example.svg':

![Example.svg](https://svgur.com/i/i6U.svg)

> There is no upper limit to how many coordinates can be used or how complicated a vector can be.