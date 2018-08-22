webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1 style=\"color:maroon;\">\n    Welcome to {{ title }}!\n  </h1>\n</div>\n\n<div style=\"position: relative\">\n  <div id=\"map\" style=\"height: 450px\"></div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wrld_js_dist_wrld_js__ = __webpack_require__("./node_modules/wrld.js/dist/wrld.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wrld_js_dist_wrld_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wrld_js_dist_wrld_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl___ = __webpack_require__("./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mapbox_gl___);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MapBox Application';
    }
    AppComponent.prototype.ngOnInit = function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbGFwcmFzYW5uYWt1bWFyIiwiYSI6ImNqa3kxd3FxMTBldXMza3A4M3kzdmRvbmoifQ.haVd2ekZjvT0eP_YpD-XBg';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [-74.0066, 40.7135],
            zoom: 15.5,
            pitch: 45,
            bearing: -17.6
        });
        // The 'building' layer in the mapbox-streets vector source contains building-height
        // data from OpenStreetMap.
        map.on('load', function () {
            // Insert the layer beneath any symbol layer.
            var layers = map.getStyle().layers;
            var labelLayerId;
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
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__load_map_load_map_component__ = __webpack_require__("./src/app/load-map/load-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_icons_custom_icons_component__ = __webpack_require__("./src/app/custom-icons/custom-icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__country_country_component__ = __webpack_require__("./src/app/country/country.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__load_map_load_map_component__["a" /* LoadMapComponent */],
                __WEBPACK_IMPORTED_MODULE_4__custom_icons_custom_icons_component__["a" /* CustomIconsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__country_country_component__["a" /* CountryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__load_map_load_map_component__["a" /* LoadMapComponent */], __WEBPACK_IMPORTED_MODULE_4__custom_icons_custom_icons_component__["a" /* CustomIconsComponent */], __WEBPACK_IMPORTED_MODULE_6__country_country_component__["a" /* CountryComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/country/country.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/country/country.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  country works!\n</p>\n<div><button class=\"btn btn-success\" (click)=\"test()\">Click Me</button></div>\n"

/***/ }),

/***/ "./src/app/country/country.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CountryComponent = /** @class */ (function () {
    function CountryComponent() {
    }
    CountryComponent.prototype.ngOnInit = function () {
        this.test();
    };
    CountryComponent.prototype.test = function () {
        console.log("Hola!");
    };
    CountryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-country',
            template: __webpack_require__("./src/app/country/country.component.html"),
            styles: [__webpack_require__("./src/app/country/country.component.css")]
        })
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/custom-icons/custom-icons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/custom-icons/custom-icons.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .marker {\n      display: block;\n      border: none;\n      border-radius: 50%;\n      cursor: pointer;\n      padding: 0;\n  }\n  </style>\n <div style=\"position: relative\">\n  <div id=\"mapIcons\" style=\"height: 450px\"></div>\n</div>\n\n<div>\n  <div style=\"position: relative\">\n    <div id=\"mapwrld\" style=\"height: 450px\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/custom-icons/custom-icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomIconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___ = __webpack_require__("./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dist_wrld_js__ = __webpack_require__("./node_modules/dist/wrld.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dist_wrld_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dist_wrld_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomIconsComponent = /** @class */ (function () {
    function CustomIconsComponent() {
    }
    CustomIconsComponent.prototype.ngOnInit = function () {
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
                }
            ]
        };
        var map = new mapboxgl.Map({
            container: 'mapIcons',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [-122.4032556, 37.7870131],
            zoom: 15.5
        });
        map.on('load', function () {
            // Insert the layer beneath any symbol layer.
            var layers = map.getStyle().layers;
            var labelLayerId;
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
        geojson.features.forEach(function (marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
            el.style.width = marker.properties.iconSize[0] + 'px';
            el.style.height = marker.properties.iconSize[1] + 'px';
            el.addEventListener('click', function () {
                if (marker.properties.message === 'WRLD3D') {
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
            var popupOptions;
            var popup;
            var map = L.Wrld.map('mapwrld', '971d83096901c8457a32eab0804b39d0', {
                center: [37.7870131, -122.4032556],
                zoom: 16,
                indoorsEnabled: true
            });
            map.indoors.on('indoormapenter', function (event) {
                var latLng = map.getCenter();
                var indoorMapId = event.indoorMap.getIndoorMapId();
                var buildingName = event.indoorMap.getIndoorMapName();
                popupOptions = {
                    indoorMapId: indoorMapId,
                    indoorMapFloorIndex: 0,
                    autoClose: false,
                    closeOnClick: false
                };
                popup = L.popup(popupOptions)
                    .setLatLng(latLng)
                    .addTo(map)
                    .setContent(buildingName + ' ' + indoorMapId);
            });
            map.on("popupclose", function () {
                map.indoors.exit();
                document.getElementById('mapwrld').innerHTML = '';
            });
        }
    };
    CustomIconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-custom-icons',
            template: __webpack_require__("./src/app/custom-icons/custom-icons.component.html"),
            styles: [__webpack_require__("./src/app/custom-icons/custom-icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomIconsComponent);
    return CustomIconsComponent;
}());



/***/ }),

/***/ "./src/app/load-map/load-map.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/load-map/load-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div style=\"position: relative\">\n        <div id=\"map2\" style=\"height: 450px\"></div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/load-map/load-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wrld_js_dist_wrld_js__ = __webpack_require__("./node_modules/wrld.js/dist/wrld.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wrld_js_dist_wrld_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wrld_js_dist_wrld_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl___ = __webpack_require__("./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mapbox_gl___);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// declare var map: any;


var LoadMapComponent = /** @class */ (function () {
    function LoadMapComponent() {
    }
    LoadMapComponent.prototype.ngOnInit = function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbGFwcmFzYW5uYWt1bWFyIiwiYSI6ImNqa3kxd3FxMTBldXMza3A4M3kzdmRvbmoifQ.haVd2ekZjvT0eP_YpD-XBg';
        var map = new mapboxgl.Map({
            container: 'map2',
            style: 'mapbox://styles/mapbox/streets-v9',
            // center: [-87.61694, 41.86625],
            center: [-87.61694, 41.86625],
            zoom: 15.99,
            pitch: 40,
            bearing: 20
        });
        map.on('load', function () {
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
    };
    LoadMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-load-map',
            template: __webpack_require__("./src/app/load-map/load-map.component.html"),
            styles: [__webpack_require__("./src/app/load-map/load-map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadMapComponent);
    return LoadMapComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
//   platformBrowserDynamic().bootstrapModule(LoadMapComponent)
//   .catch(err => console.log(err));
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map