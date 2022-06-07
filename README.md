# Coordinate SVG

Coordinate SVG is a simple package that will allow you to tranform any set of coordinates into SVG XML.

# Installation

`npm i coordinate_svg`

# Usage

## Import Module

`const svg = require('coordinate_svg')`

## Format Coordinates

* Each coordinate should be expressed as an array in the form `[x, y]`.
* This array should then be stored in an array storing a set of coordinates, forming a subpath:  `[[x,y],[x,y],[x,y] ...  ]`.
* This array should be stored in another array which will contain all the subpaths of the path shape:  `[[[x,y],[x,y],[x,y] ...  ],[[x,y],[x,y],[x,y] ...  ]]`

> Subpaths are expressed in the form `d = M <subpath 1> z M <subpath 2> z ...`. To form a solid shape, express only one set of coordinates surrounded by **Double Square Brackets [ ]** ( eg. `[[[x,y],[x,y],[x,y]]]`). Further subpaths can be used to great gaps or holes inside a solid shape. 

## Create a New SVG

To create a new SVG enclosed, use `new svg.SVG( {Properties} )`. This will create a new XML object wrapped in `<SVG>` tags. The `SVG()` function takes one parameter:

|  Parameter  | Type| |
| ------------- | ------------- |-|
| SVG Properties  | Object |XML attributes for the parent `<SVG>` element. Expressed as a javascript object. For example: `{height: 500, width: 500}`. For all possible attributes, see the [Documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg).|

`new svg.SVG( Properties )`


## Create a New Shape:

To create a new shape inside your SVG, use `mySVG.newPath( Coordinates , {Properties} )`. This will create a new `<Path>` element inside the `<SVG>` tags, in the shape of the given coordinates. The `newPath()` function takes two parameters:

|  Parameter  | Type| |
| ------------- | ------------- |-|
| Coordinates  | Array  |Coordinates to convert to SVG, see above for formatting.|
|Path Properties|Object|XML attributes for the chils `<Path>` element. Expressed as a javascript object. For example: `{stroke: 'none', fill: 'black'}`. For all possible attributes, see the [Documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) |

`mySVG.createSVG( Coordinates, Path Properties )`
 
## Obtain the SVG as XML

The command `mySVG.getXML()` will return `mySVG` as a raw XML string.

> The resulting svg file will be returned as raw XML. This can then be saved to a .svg file, or further utilised in a program.

# Example

```
// Import built in File System Module

const fs = require('fs')

// Import Coordinate SVG  Module as svg

const svg = require('./index')

// Configure coordinates

const coordinates = [

    // Outer Rectangle
    
    [[50,50],[50,100],[250,100],[250,50]],

    // Inner Rectangle to produce a hole in the shape

    [[60,60],[60,90],[240,90],[240,60]]

]

// Create a new XML object enclosed in <SVG> tags

var mySVG = new svg.SVG(

    {

        height : 150,
        width : 300,
    
    }

)

// Create a new <Path> element inside the XML object

mySVG.newPath(coordinates)

// Get the XML object as a raw XML string

var xml = mySVG.getXML()

// Save the XML into a file named "example.svg"

fs.appendFile('example.svg', xml, () => {})

```

The contents of example.svg will be:

`<svg version="1.1" height="150" width="300" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"><path pathlength="100" stroke="none" fill="black" d="M 50,50 50,100 250,100 250,50 z M 60,60 60,90 240,90 240,60 z "></path></svg>`

Which will be displayed as:

![](https://svgur.com/i/i78.svg)