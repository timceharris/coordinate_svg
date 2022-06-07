const xml = require('xml')

exports.SVG = function (svgproperties = {}) {

    svgproperties = {...{

        height : 150,
        width: 300,
        xmlns: "http://www.w3.org/2000/svg",
        'fill-rule' : 'evenodd'

    }, ...svgproperties}

    this.xml = [{

        svg: [
            
            {_attr : {...{'version': '1.1'}, ...svgproperties}},


        ]

    }]

    this.newPath = (coordinates = [
    
        [[50,50],[50,100],[250,100],[250,50]],
    
        [[60,60],[60,90],[240,90],[240,60]]
    
    ], pathproperties = {}) => {

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

        this.xml[0].svg.push({path: [
            {_attr: {...pathproperties, d: coordstring}},
            
        ]})

    }

    this.getXML = () => {

        svgxml = xml(this.xml)
        return(svgxml)

    }
}