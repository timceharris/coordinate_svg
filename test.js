const fs = require('fs')

const svg = require('./index')

const coordinates = [
    
    [[50,50],[50,100],[250,100],[250,50]],

    [[60,60],[60,90],[240,90],[240,60]]

]

var xml = svg.createSVG(coordinates, 150, 300)

fs.appendFile('example.svg', xml, () => {})