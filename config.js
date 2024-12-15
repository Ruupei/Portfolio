var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    //style: 'mapbox://styles/rheikkinen/cm4dd7ix5004101ra4wnj5k0r',

    accessToken: 'pk.eyJ1IjoicmhlaWtraW5lbiIsImEiOiJjbTRjMTE2ZDkwNXpiMmtxMTN2ZmhnY2Q4In0.fv_zHN09Ibe6q2uM6xoVqA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'GIS Portfolio',
    subtitle: '',
    byline: 'Roope Heikkinen',
    footer: 'GIS Portfolio - Roope Heikkinen',
    chapters: [
        {
            id: 'Intro',
            alignment: 'Center',
            hidden: false,
            title: 'Introduction',
            image: '',
            description: 'This portfolio showcases a selection of GIS work I have undertaken during my time at university, professionally as a Spatial Analyst, '+ 
                        'and some of my personal projects. I aim to demonstrate the variety of work I have done, '+
                        'the types of data I am familiar with, and methods I have used. I am driven by a passion for learning and always eager to explore new technologies.  '+
                        'I enjoy the challenge of problem solving. Creating this portfolio itself has required significant time and effort as I started with no prior '+
                        'knowledge of Mapbox, HTML, or JavaScript. Despite encountering many difficulties, with help from AI, I was able to do it. '+
                        'Just scroll this page down to see more. I hope you enjoy it!<br>'+
                        '<br>'+
                        '<strong>Portfolio Chapters:</strong><br>'+
                        '•	Lobster Habitat and Protection Area<br>'+
                        '•	RUSLE for Agroforestry<br>'+
                        '•	URBIS - Spatial Analysis in a Consulting Company<br>'+
                        '•	QinetiQ Air Affairs - Large Area Bushfire Surveillance<br>'+
                        '•	Finns in NSW - Where Are They?<br>'+
                        '•	Urban Change in Callala Bay',
            locations: [
            ], 
            location: {
                center: [150.89051348716898, -34.469426691007355],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: '',
                     opacity: 1,
                     duration: 5000
                }
            ],
            onChapterExit: [
                {
                     layer: '',
                     opacity: 0
                }
            ]
        },
        {
            id: 'Lobster',
            alignment: 'left',
            hidden: false,
            title: 'Lobster Habitat and Protection Area',
            image: 'kelp_geomorph.jpg',
            description: '<strong>Background:</strong> These maps were created as part of a university assignment. The task was to identify lobster habitats '+
                        'outside of Port Kembla in the Five Islands Nature Reserve. The results were used to define the boundaries for a new '+
                        'Sanctuary Zone and Special Purpose Zone to protect the local lobster population. The lobster habitat and protection '+
                        'zone layers are shown on the right.<br>'+
                        '<br>'+
                        '<strong>Kelp extent:</strong>I used GeoDa for spatial regression analysis to determine the presence of kelp based on physical '+
                        'characteristics of the seafloor and WorldView2 satellite imagery.<br>'+
                        '<strong>Geomorphological features:</strong> A supervised classification was conducted using underwater control points to assess accuracy.<br>'+
                        '<strong>Lobster habitat:</strong> I combined the results from the kelp and geomorphology layers, excluding areas outside the '+
                        'preferred depth range for lobsters.<br>'+
                        '<strong>Proposed reserve boundaries:</strong> Boundaries were drawn to protect the majority of the habitat while keeping the '+
                        'map simple to avoid confusion.',
            locations: [
            ],
            location: {
                center: [150.89051348716898, -34.474426691007355],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },  
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'lobster-habitat-layer',
                    opacity: 1,
                },
                {
                    layer: 'sanctuary-zone-layer',
                    opacity: 1,
                },
                {
                    layer: 'special-purpose-zone-layer',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'lobster-habitat-layer',
                    opacity: 0,
                },
                {
                    layer: 'sanctuary-zone-layer',
                    opacity: 0,
                },
                {
                    layer: 'special-purpose-zone-layer',
                    opacity: 0,
                }
            ],
        },
        {
            id: 'RUSLE',
            alignment: 'left',
            hidden: false,
            title: 'RUSLE for Agroforestry',
            image: 'Rusle_all.jpg',
            description: '<strong>Background:</strong> These maps were part of another university subject. I was interested in agroforestry and wanted to '+
                        'explore how pastures could benefit from planting more trees using the Revised Universal Soil Loss Equation (RUSLE). '+
                        'I chose Western Gippsland due to its large number of pastures. The above maps show how trees can reduce soil loss. '+
                        'The more trees there are, the less soil is lost, highlighting the potential benefits of practicing agroforestry.<br>'+
                        '<br>'+
                        '<strong>Method:</strong> I was provided with layers such as slope steepness, rainfall erosivity factors, and tree cover. Using '+
                        'these layers, I produced the maps using the RUSLE equation in a raster calculator. The layer on the right represents '+
                        'Scenario 1, where Gippsland is used as a pasture with the highest soil loss rate.',
            locations: [
            ], 
            location: {
                center: [145.24323584924503, -38.45964980916663],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'rusle_0-8_layer',
                     opacity: 1,
                     duration: 5000
                }
            ],
            onChapterExit: [
                {
                     layer: 'rusle_0-8_layer',
                     opacity: 1
                }
            ]
        },
        {
            id: 'URBIS',
            alignment: 'left',
            hidden: false,
            title: 'URBIS - Spatial Analysis in a Consulting Company',
            image: '',
            description: 'URBIS is a consulting company specializing in infrastructure, transport, economics, and heritage management. '+
                        'I worked as a Spatial Analyst, producing maps for internal clients in these business units. I typically used '+
                        'data from NSW Spatial Services, such as the zoning layer displayed here or DEM for heritage management projects. '+
                        'My duties included mainly using ESRI products for geoprocessing, filtering, and creating data for specific '+
                        'client needs, all while adhering to corporate and cartographic standards.',
            locations: [
                { coordinates: [151.2083720801319, -33.856694907814086], description: 'URBIS, Sydney'}
            ], 
            location: {
                center: [151.19495131621627, -33.86686803491877],
                zoom: 13.5,
                pitch: 0,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'MEADOWS_RD',
            alignment: 'left',
            hidden: false,
            title: 'QinetiQ Air Affairs - Large Area Bushfire Surveillance',
            image: 'Meadows Rd_281124.jpeg',
            description: 'Currently, I work for QinetiQ Air Affairs based in Nowra as a GIS Analyst. We provide near-real-time multispectral '+
                        'imagery of bushfires to emergency services like the RFS in NSW or DFES in Western Australia. One of my tasks is processing '+
                        'the imagery. The image '+
                        'displayed above is an example of the products we provide. In this image, I used mid-wave infrared to highlight the fire '+
                        '(red channel) and long-wave infrared to highlight the ground (green channel), with a blue mask band for blue channel. The points on the right are satellite '+
                        'detected hotspots of the same fire event, downloaded from NASA FIRMS.',
            locations: [
            ],
            location: {
                center: [114.9293480587947, -30.736630748734306],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showPolyPoints',
            onChapterEnter: [],
            onChapterExit: []

        },
        {
            id: 'FINNS IN NSW',
            alignment: 'left',
            hidden: false,
            title: 'Finns in NSW - Where Are They?',
            image: 'Finns_code_legend.png',
            description: '<strong>Background:</strong> As a Finnish person, I was curious to know how many other Finnish people live on the South Coast and '+
                        'surrounding areas. What better way to explore this than by mapping it.<br>'+
                        '<br>'+
                        '<strong>Method:</strong> I downloaded the latest census data from the Australian Bureau of Statistics as a CSV file and SA2 vector '+
                        'layers from NSW Spatial Services; however, the naming conventions between the CSV and vector layers did not always match. '+
                        'To address this, I used a Python library called FuzzyWuzzy to find the closest match for each data point and merged the '+
                        'CSV and vector layers. The result is the map shown in the background, with the corresponding legend next to the code I used.',
            locations: [
            ],
            location: {
                center: [149.8747116371989, -34.73710043344838],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            callback: 'showPolygonLayer',
            onChapterExit: [{
                layer: 'polygon-layer-fill',
                opacity: 0
            }],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'URBAN CHANGE',
            alignment: 'left',
            hidden: false,
            title: 'Urban Change in Callala Bay',
            image: '',
            description: '<strong>Background:</strong> A new development was proposed for Callala Bay, an area that is home to multiple endangered species, '+
                        "triggering resistance from the local community. I was interested in comparing the proposed development's size with "+
                        'previous developments in the area.<br>'+
                        '<br>'+
                        '<strong>Method:</strong> I had discovered the Digital Earth Australia Sandbox and found an algorithm for Urban Change Detection. '+
                        'This algorithm calculates the Enhanced Normalized Difference Impervious Surfaces Index (ENDISI), which, like NDVI, '+
                        'uses a specific formula combining various wavelengths from satellite imagery. It produces a raster, which I then '+
                        'vectorized. Using 2013 as the baseline, I created a map to visually compare the results, exported it as a georeferenced '+
                        'image, and uploaded it to MapBox for presentation.',
            locations: [
            ],
            location: {
                center: [150.53596724665637, -35.020269051124004],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};