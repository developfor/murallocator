import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router'
import './Map.css';

import mapboxgl from 'mapbox-gl';


class MuralMap extends Component {

  constructor() {
    super();
  }

  windowHeight() {
    document.getElementById("mapContainer").style.height = window.innerHeight - 40 + 'px';
    window.addEventListener('resize', function () {
      console.log(this)
      document.getElementById("mapContainer").style.height = window.innerHeight - 40 + 'px';
    });
  }

  componentDidMount() {
    this.windowHeight()
    // mapboxgl.accessToken = 'pk.eyJ1IjoiYm9ib2JvMSIsImEiOiJjajF5NTl1aHEwMGJqMndtZW11cWkwN2FqIn0.DjZGcSnaSjX5gdGRhcdQYQ';
    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2ZzZGZkc2ZkcyIsImEiOiJjajJ4a251c2kwMGx1MzJsNTVlNDdrYjFiIn0.WMB-yMZtMwy0rtDJijY7cA';
    var map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v9'
    });

    var nav = new mapboxgl.NavigationControl();


    // map.addControl(new mapboxgl.GeolocateControl({
    //   positionOptions: {
    //     enableHighAccuracy: true
    //   }
    // }));

    var geoLocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      }
    });
    map.addControl(geoLocate);

    map.addControl(nav, 'bottom-right');


    var framesPerSecond = 15;
    var initialOpacity = 1
    var opacity = initialOpacity;
    var initialRadius = 8;
    var radius = initialRadius;
    var maxRadius = 18;



    map.on('load', function () {

      // geoLocate.on('geolocate', function (e) {
      //   console.log(e.coords);
      //   // map.setZoom(8);
      // });


      var geojson = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "image": "http://www.stpetemuraltour.com/wp-content/uploads/2014/08/Tes-One-and-Pale-Horse-Design-St-Pete-Florida-Mural-1920-by-1000.jpg",
              "message": "Foo",
              "iconSize": [60, 60]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -66.324462890625,
                -16.024695711685304
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "image": "http://www.stpetemuraltour.com/wp-content/uploads/2014/08/Tes-One-and-Pale-Horse-Design-St-Pete-Florida-Mural-1920-by-1000.jpg",
              "message": "Bar",
              "iconSize": [50, 50]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -61.2158203125,
                -15.97189158092897
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "image": "http://www.stpetemuraltour.com/wp-content/uploads/2014/08/Tes-One-and-Pale-Horse-Design-St-Pete-Florida-Mural-1920-by-1000.jpg",
              "message": "Baz",
              "iconSize": [40, 40]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -63.29223632812499,
                -18.28151823530889
              ]
            }
          }
        ]
      };
      let markerSize = 50

      // add markers to map
      geojson.features.forEach(function (marker) {
        // create a DOM element for the marker
        // console.log(marker)
        var el = document.createElement('div');
        el.className = 'marker';
        // marker
        // el.style.backgroundImage = "url(${marker.properties.image + marker.properties.iconSize.join('/')}/)"  
        el.style.backgroundImage = 'url('+ marker.properties.image + '/)';
        // el.style.backgroundSize =  markerSize + 'px';
        // el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
        console.log(el.style);
        el.style.width = markerSize + 'px';
        el.style.height = markerSize + 'px';

        // el.addEventListener('click', function() {
        //     window.alert(marker.properties.message);
        // });

        // add marker to map
        new mapboxgl.Marker(el, { offset: [-markerSize / 2, -markerSize / 2] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });


      let userLocation = () => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (location) {
            // console.log(location.coords.latitude);
            // console.log(location.coords.longitude);
            // console.log(location.coords.accuracy);

            /* geolocation is available */

            // Add a source and layer displaying a point which will be animated in a circle.
            map.addSource('point', {
              "type": "geojson",
              "data": {
                "type": "Point",
                "coordinates": [
                  location.coords.longitude, location.coords.latitude
                ]
              }
            });

            window.setInterval(function() {
              navigator.geolocation.getCurrentPosition( (updateLocation) => {
                map.getSource('point').setData(
                  {"geometry": {"type": "Point", "coordinates": [updateLocation.coords.longitude, updateLocation.coords.latitude]}, "type": "Feature", "properties": {}}
                );
              });
            }, 5000);

            map.addLayer({
              "id": "point",
              "source": "point",
              "type": "circle",
              "paint": {
                "circle-radius": initialRadius,
                "circle-radius-transition": { duration: 0 },
                "circle-opacity-transition": { duration: 0 },
                "circle-color": "#007cbf"
              }
            });

            map.addLayer({
              "id": "point1",
              "source": "point",
              "type": "circle",
              "paint": {
                "circle-radius": initialRadius,
                "circle-color": "#007cbf"
              }
            });

    //           map.addLayer({
    //     'id': '3d-buildings',
    //     'source': 'composite',
    //     'source-layer': 'building',
    //     'filter': ['==', 'extrude', 'true'],
    //     'type': 'fill-extrusion',
    //     'minzoom': 15,
    //     'paint': {
    //         'fill-extrusion-color': '#aaa',
    //         'fill-extrusion-height': {
    //             'type': 'identity',
    //             'property': 'height'
    //         },
    //         'fill-extrusion-base': {
    //             'type': 'identity',
    //             'property': 'min_height'
    //         },
    //         'fill-extrusion-opacity': .6
    //     }
    // });





            function animateMarker(timestamp) {
              setTimeout(function () {
                requestAnimationFrame(animateMarker);

                radius += (maxRadius - radius) / framesPerSecond;
                opacity -= (.9 / framesPerSecond);


                if (opacity <= 0) {
                  radius = initialRadius;
                  opacity = initialOpacity;
                }

                map.setPaintProperty('point', 'circle-radius', radius);
                map.setPaintProperty('point', 'circle-opacity', opacity);


              }, 1000 / framesPerSecond);

            }

            // Start the animation.
            animateMarker(0);

          });
        } else {
          /* geolocation IS NOT available */
        }

      }
      userLocation();
      // setInterval(() => {  }, 3000);
      



    });

  }
  render() {
    return (
      <div className="map-container" id="mapContainer" ref="map">

      </div>
    )
  }
}

export default MuralMap