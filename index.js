const xml = require('xml')

exports.createSVG = (coordinates = [
    
    [[50,50],[50,100],[250,100],[250,50]],

    [[60,60],[60,90],[240,90],[240,60]]

], svgproperties, pathproperties) => {

    svgproperties = {...{

        height : 150,
        width: 300,
        xmlns: "http://www.w3.org/2000/svg",
        'fill-rule' : 'evenodd'

    }, ...svgproperties}

    pathproperties = {...{

        pathlength: 100,
        stroke: 'none',
        fill: 'black'

    }}

    let coordstring = ''

    for (let i = 0; i < coordinates.length; i++){

        coordstring = coordstring + 'M'

        for (let t = 0; t < coordinates[i].length; t++){
        coordstring = coordstring + (' ' + coordinates[i][t][0] + ',' + coordinates[i][t][1])
        }

        coordstring = coordstring + ' z '

    }

    xmlObject = [{

            svg: [
                
                {_attr : {...{'version': '1.1'}, ...svgproperties}},
                {path: [
                    {_attr: {...pathproperties, d: coordstring}},
                    
                ]}

            ]

        }]

    svgxml = xml(xmlObject)
    return(svgxml)


}