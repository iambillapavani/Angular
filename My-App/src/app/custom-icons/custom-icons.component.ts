import { Component, OnInit } from '@angular/core';
import 'mapbox-gl/';
declare var mapboxgl: any;
import 'dist/wrld.js';
declare var L:any;

@Component({
  selector: 'app-custom-icons',
  templateUrl: './custom-icons.component.html',
  styleUrls: ['./custom-icons.component.css']
})
export class CustomIconsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbGFwcmFzYW5uYWt1bWFyIiwiYSI6ImNqa3kxd3FxMTBldXMza3A4M3kzdmRvbmoifQ.haVd2ekZjvT0eP_YpD-XBg';
    var geojson = {
      "type": "FeatureCollection",
      "features": [
          {
            "type": "Feature",
            "properties": {
                "message": "Bar",
                "iconSize": [50, 50]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                  -121.4032556, 36.7870131
                ]
            }
        },
        {
          "type": "Feature",
          "properties": {
              "message": "WRLD3D",
              "iconSize": [40, 40]
          },
          "geometry": {
              "type": "Point",
              "coordinates": [
                -122.4032556, 37.7870131
              ]
          }
      }]
  };

  let map = new mapboxgl.Map({
    container: 'mapIcons',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-122.4032556, 37.7870131],
    zoom: 15.5
});

map.on('load', ()=> {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  let labelLayerId;
  for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
      }
    }

  map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
        'fill-extrusion-color': '#aaa',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "height"]
        ],
        'fill-extrusion-base': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "min_height"]
        ],
        'fill-extrusion-opacity': .6
    }
}, labelLayerId);
});
map.addControl(new mapboxgl.NavigationControl());

geojson.features.forEach(function(marker) {
  // create a DOM element for the marker
  var el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
  el.style.width = marker.properties.iconSize[0] + 'px';
  el.style.height = marker.properties.iconSize[1] + 'px';

  el.addEventListener('click', function() {
      if(marker.properties.message==='WRLD3D'){
      popUp();
      }

  // var event = document.createEvent('Event');
  // event.initEvent('indoormapenter', true, true);
  // el.dispatchEvent(event);
  // el.addEventListener('indoormapenter', function(){
  // alert("Working");
  // popUp();
  // });

  });
  new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
    });

    function popUp() {
      let popupOptions:any;
      let popup:any;
      let map = L.Wrld.map('mapwrld', '971d83096901c8457a32eab0804b39d0', {
        center: [37.7870131, -122.4032556],
        zoom: 16,
        indoorsEnabled: true
      });
      map.indoors.on('indoormapenter', (event) => {
        let latLng = map.getCenter();
        let indoorMapId = event.indoorMap.getIndoorMapId();
        let buildingName = event.indoorMap.getIndoorMapName();
    
        popupOptions = { 
          indoorMapId: indoorMapId, 
          indoorMapFloorIndex: 0, 
          autoClose: false, 
          closeOnClick: false 
        };
    
        popup = L.popup(popupOptions)
        .setLatLng(latLng)
        .addTo(map)
        .setContent(buildingName+' '+indoorMapId);
      });
      map.on("popupclose", function() { map.indoors.exit();
        document.getElementById('mapwrld').innerHTML = '' ;
       })
    }   
  } 
}
