exports.createSVG = (array = [[50,50],[50,100],[250,100],[250,50]],height = 150,width = 300) => {

    let coordstring = ''

    for (let i = 0; i < array.length; i++){
        coordstring = coordstring + (array[i][0] + ',' + array[i][1] + ' ')
    }

    xml = '<svg version="1.1" width="' + width + '" height="' + height + '" xmlns="http://www.w3.org/2000/svg"> <polygon points="' + coordstring + '"> </polygon> </svg>'
    return(xml)


}