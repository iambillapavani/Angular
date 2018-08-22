import { Component, OnInit } from '@angular/core';
declare var L: any;
declare var map: any;
import 'wrld.js/dist/wrld.js';
declare var mapboxgl: any;
declare var labelLayerId: any;
import 'mapbox-gl/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbGFwcmFzYW5uYWt1bWFyIiwiYSI6ImNqa3kxd3FxMTBldXMza3A4M3kzdmRvbmoifQ.haVd2ekZjvT0eP_YpD-XBg';
    let map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-74.0066, 40.7135], 
    zoom: 15.5,
    pitch: 45,
    bearing: -17.6
});
// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
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
}

  title = 'MapBox Application';
}