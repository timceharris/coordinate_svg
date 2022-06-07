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
