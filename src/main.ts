import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoidmljaW91cy10cnVlcyIsImEiOiJjbHNkanN6eTQxMGhjMmtvN2I5NnFhZndlIn0.7dL82yc4vCcImtHvGOZkfQ';

if (!navigator.geolocation) {
  alert('Navegador no soporta la Geolocation')
  throw new Error('Navegador no soporta la Geolocation')
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
