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
            description: 'This portfolio showcases a selection of GIS work I have completed during university, in my professional role as a Spatial Analyst, ' +
                        'and through personal projects. My goal is to demonstrate the variety of work I have undertaken, the types of data I am familiar with, ' +
                        'and the methods I have used.<br>' +
                        '<br>' +
                        'Driven by a passion for learning, I am always eager to explore new technologies and enjoy the challenge of problem-solving. ' +
                        'Creating this portfolio itself required significant time and effort, as I started with no prior knowledge of Mapbox, HTML, or JavaScript. ' +
                        'Despite many challenges, with the help of AI, I was able to bring it to life.<br>' +
                        '<br>' +
                        'Scroll down to explore my work—I hope you enjoy it!<br>' +
                        '<br>' +
                        '<strong>Portfolio Chapters:</strong><br>' +
                        '•	Lobster Habitat and Protection Area<br>' +
                        '•	RUSLE for Agroforestry<br>' +
                        '•	URBIS - Spatial Analysis in a Consulting Company<br>' +
                        '•	QinetiQ Air Affairs - Large Area Bushfire Surveillance<br>' +
                        '•	Finns in NSW - Where Are They?<br>' +
                        '•	Urban Change in Callala Bay<br>' +
                        '•	Orienteering Map Making',
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
            description: '<strong>Background:</strong> These maps were created as part of a university assignment to identify lobster habitats outside Port Kembla, ' +
                        'within the Five Islands Nature Reserve. The results helped define boundaries for a new Sanctuary Zone and Special Purpose Zone aimed at ' +
                        'protecting the local lobster population. The lobster habitat and protection zone layers are displayed on the right.<br>' +
                        '<br>' +
                        '<strong>Method:</strong><br>' +
                        '• <strong>Kelp extent:</strong> I used GeoDa for spatial regression analysis to model the presence of kelp based on seafloor ' +
                        'characteristics and WorldView-2 satellite imagery.<br>' +
                        '• <strong>Geomorphological features:</strong> A supervised classification was conducted using underwater control points to validate ' +
                        'accuracy.<br>' +
                        '• <strong>Lobster habitat:</strong> I combined the kelp and geomorphology layers, excluding areas outside the preferred depth ' +
                        'range for lobsters.<br>' +
                        '• <strong>Proposed reserve boundaries:</strong> The boundaries were drawn to maximize habitat protection while keeping the map ' +
                        'clear and easy to interpret.',
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
            description: '<strong>Background:</strong> These maps were created for a university project exploring the impact of agroforestry on soil conservation. ' +
                        'I was particularly interested in how planting more trees in pastures could reduce soil loss, using the Revised Universal Soil Loss ' +
                        'Equation (RUSLE). I selected Western Gippsland for this study due to its extensive pasturelands. The maps illustrate the relationship ' +
                        'between tree cover and soil erosion—more trees result in less soil loss, emphasizing the potential benefits of agroforestry.<br>' +
                        '<br>' +
                        '<strong>Methodology:</strong><br>' +
                        'I used provided datasets, including:<br>' +
                        '• Slope steepness<br>' +
                        '• Rainfall erosivity factors<br>' +
                        '• Tree cover<br>' +
                        '• Land use type<br>' +
                        '<br>' +
                        'These layers were processed using raster calculations based on the RUSLE equation to generate the final maps. The layer on the right ' +
                        'represents Scenario 1, where Gippsland is used primarily as pasture, resulting in the highest soil loss rate.',
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
            description: '<strong>Background:</strong> URBIS is a consulting firm specializing in infrastructure, transport, economics, and heritage management. ' +
                        'As a Spatial Analyst, I supported internal clients across these business units by producing maps and conducting spatial analysis.<br>' +
                        '<br>' +
                        '<strong>Role:</strong> I primarily worked with data from NSW Spatial Services, including zoning layers (as shown here) and digital ' +
                        'elevation models (DEM) for heritage management projects. My role involved geoprocessing, data filtering, and creating client-specific ' +
                        'datasets using ESRI products, all while ensuring compliance with corporate and cartographic standards.',
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
            description: 'I currently work as a GIS Analyst at QinetiQ Air Affairs in Nowra, where we provide near-real-time multispectral imagery of bushfires to emergency services such as the Rural Fire Service (RFS) in NSW and Department of Fire and Emergency Services (DFES) in Western Australia.<br>' +
                        '<br>' +
                        'One of my primary responsibilities is processing and analyzing multispectral imagery to support firefighting efforts. The image above is an example of our products. In this visualization:<br>' +
                        '<br>' +
                        '• Mid-wave infrared (MWIR) highlights the active fire (red channel)<br>' +
                        '• Long-wave infrared (LWIR) highlights the ground (green channel)<br>' +
                        '• A blue mask band is used for the blue channel to enhance contrast<br>' +
                        '<br>' +
                        'The points on the right represent satellite-detected hotspots for the same fire event, sourced from NASA FIRMS.',
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
            description: '<strong>Background:</strong> As a Finnish person, I was curious to explore how many other Finnish people live on the South Coast and surrounding areas. What better way to investigate than by mapping it?<br>' +
                        '<br>' +
                        '<strong>Methodology:</strong><br>' +
                        'The analysis combined demographic and spatial data:<br>' +
                        '• ABS Census data (2021) with Finnish ancestry statistics<br>' +
                        '• NSW Spatial Services SA2 vector boundaries for geographic representation<br>' +
                        '• FuzzyWuzzy Python library for string matching between datasets<br>' +
                        '• Vector data processing for choropleth map visualization<br>' +
                        '<br>' +
                        'The resulting choropleth map in the background shows the distribution of Finnish population across SA2 regions. The Python code snippet and classification legend are displayed above.',
            locations: [
            ],
            location: {
                center: [149.8747116371989, -34.73710043344838],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showPolygonLayer',
            onChapterEnter: [],
            onChapterExit: [{
                layer: 'polygon-layer-fill',
                opacity: 0
            }]
        },
        {
            id: 'URBAN CHANGE',
            alignment: 'left',
            hidden: false,
            title: 'Urban Change in Callala Bay',
            image: '',
            description: '<strong>Background:</strong> A new development was proposed for Callala Bay, an area home to multiple endangered species, sparking opposition from the local community. I was interested in comparing the scale of the proposed development with previous developments in the area to better understand its potential impact.<br>' +
                        '<br>' +
                        '<strong>Methodology:</strong><br>' +
                        'I explored the Digital Earth Australia (DEA) Sandbox and discovered an Urban Change Detection algorithm. This algorithm calculates the Enhanced Normalized Difference Impervious Surfaces Index (ENDISI), which—similar to NDVI—uses a specific formula combining multiple wavelengths from satellite imagery to detect urban expansion.<br>' +
                        '<br>' +
                        'The process involved:<br>' +
                        '• Running the ENDISI algorithm to generate a raster representing urban change<br>' +
                        '• Vectorizing the raster to create a more interpretable dataset<br>' +
                        '• Using 2013 as a baseline to compare urban expansion over time<br>' +
                        '• Creating a map for visualization, exporting it as a georeferenced image, and uploading it to Mapbox for presentation.',
            locations: [
            ],
            location: {
                center: [150.55596724665637, -35.020269051124004],
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
        {
            id: 'ORIENTEERING',
            alignment: 'left',
            hidden: false,
            title: 'Orienteering Map Making',
            image: 'Shoahaven_state_forest_v2.png',
            description: '<strong>Background:</strong> Every once in a while, I enjoy orienteering. However, most organized events are over an hour\'s ' +
                        'drive away. To bring events closer to home, I contacted my local orienteering club and offered to create maps for them. ' +
                        'The map above is one of the ones I have created.<br>' +
                        '<br>' +
                        '<strong>Methodology:</strong> The map was drawn using OCAD, a specialized software for orienteering maps. I used LIDAR point cloud ' +
                        'data to generate contour lines, buildings, roads, paths, and vegetation. However, the available LIDAR data was quite old, ' +
                        'so to improve vegetation accuracy, I took a different approach.<br>' +
                        '<br>' +
                        'I used Google Earth Engine to run an unsupervised classification on recent Sentinel-2 imagery. The classification results can ' +
                        'be seen on the right. For orienteers, the key concern is terrain runnability. For example, in the classification layer, ' +
                        'the purple areas represent dense Tea Tree bushland, which is slow to navigate, while the dark green indicates less dense eucalyptus forest.<br>' +
                        '<br>' +
                        'To validate the classification, I conducted field visits to the state forest, marking smaller features such as termite mounds ' +
                        'using a field mapping app. If you look closely, you might notice the map is tilted to the left. That is because it is aligned with ' +
                        'magnetic north rather than true north.',
            locations: [], 
            location: {
                center: [150.5484625792952, -34.89713072081564],
                zoom: 13.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};