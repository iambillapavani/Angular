import { Component, OnInit } from '@angular/core';
// declare var map: any;
import 'wrld.js/dist/wrld.js';
declare var mapboxgl: any;
declare var labelLayerId: any;
import 'mapbox-gl/';
@Component({
  selector: 'app-load-map',
  templateUrl: './load-map.component.html',
  styleUrls: ['./load-map.component.css']
})
export class LoadMapComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbGFwcmFzYW5uYWt1bWFyIiwiYSI6ImNqa3kxd3FxMTBldXMza3A4M3kzdmRvbmoifQ.haVd2ekZjvT0eP_YpD-XBg';
    let map = new mapboxgl.Map({
    container: 'map2', 
    style: 'mapbox://styles/mapbox/streets-v9',
    // center: [-87.61694, 41.86625],
    center: [-87.61694, 41.86625],
    zoom: 15.99,
    pitch: 40,
    bearing: 20
});
map.on('load', function() {
  map.addLayer({
      'id': 'room-extrusion',
      'type': 'fill-extrusion',
      'source': {
          'type': 'geojson',
          'data': 'https://www.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson'
      },
      'paint': {
          'fill-extrusion-color': ['get', 'color'],
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'base_height'],
          'fill-extrusion-opacity': 0.5
      }
  });
});

map.addControl(new mapboxgl.NavigationControl());
  }
}
