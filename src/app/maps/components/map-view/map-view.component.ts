import {Map} from 'mapbox-gl';
import { PlacesService } from './../../services/';
import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {

  private placesService = inject(PlacesService);

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  ngAfterViewInit(): void {

    if(!this.placesService.userLocation) throw Error(' No existe user location')

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    console.log(this.placesService.userLocation)
      
  }

  
}
