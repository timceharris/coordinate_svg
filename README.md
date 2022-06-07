# Coordinate SVG

Coordinate SVG is a simple package that will allow you to tranform any set of coordinates into SVG XML.

# Installation

`npm i coordinate_svg`

# Usage

## Import Module

`const svg = require('coordinate_svg')`

## Format Coordinates

* Each coordinate should be expressed as an array in the form `[x, y]`.
* This array should then be stored in an array storing a set of coordinates, forming a path:  `[[x,y],[x,y],[x,y] ...  ]`.
* This array should be stored in another array which will contain all the paths of the shape:  `[[[x,y],[x,y],[x,y] ...  ],[[x,y],[x,y],[x,y] ...  ]]`

> Paths are expressed in the form `d = M <path 1> z M <path 2> z ...`. To form a solid shape, express only one set of coordinates surrounded by **Double Square Brackets [ ]** ( eg. `[[[x,y],[x,y],[x,y]]]`). Further paths can be used to great gaps or holes inside a solid shape. 



## Convert to SVG:

To convert your coordinates into an SVG, use the `.createSVG()` command. The command has the following parameters:

|  Parameter  | Type| |
| ------------- | ------------- |-|
| Coordinates  | Array  |Coordinates to convert to SVG, see above for formatting.|
| SVG Properties  | Object |XML attributes for the parent `<SVG>` element. Expressed as a javascript object. For example: `{height: 500, width: 500}`. For all possible attributes, see the [Documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg).|
|Path Properties|Object|XML attributes for the chils `<Path>` element. Expressed as a javascript object. For example: `{stroke: 'none', fill: 'black'}`. For all possible attributes, see the [Documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) |

`coordinate_svg.createSVG( Coordinates, SVG Properties, Path Properties )`

> The resulting svg file will be returned as raw XML. This can then be saved to a .svg file, or further utilised in a program.

# Example

```
// Import built in File System module

const fs = require('fs')

// Import Coordinate SVG as svg

const svg = require('coordinate_svg')

// Configure coordinates

const coordinates = [

    // Outer Rectangle
    
    [[50,50],[50,100],[250,100],[250,50]],

    // Inner Rectangle to produce a hole in the shape

    [[60,60],[60,90],[240,90],[240,60]]

]

// Create a vector using the coordinates, with height 150px and width 300 px

var xml = svg.createSVG(coordinates, {

    height : 150,
    width : 300,

})

// Save the resulting svg a file named "example.svg"

fs.appendFile('example.svg', xml, () => {})

```

The contents of example.svg will be:

`<svg version="1.1" height="150" width="300" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"><path pathlength="100" stroke="none" fill="black" d="M 50,50 50,100 250,100 250,50 z M 60,60 60,90 240,90 240,60 z "></path></svg>`

Which will be displayed as:

<svg version="1.1" height="150" width="300" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"><path pathlength="100" stroke="none" fill="black" d="M 50,50 50,100 250,100 250,50 z M 60,60 60,90 240,90 240,60 z "></path></svg>
