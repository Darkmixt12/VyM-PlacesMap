import { Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { Map, Popup, Marker, LngLatBounds } from 'mapbox-gl';
import { LocationService, MapService, PlacesService } from '../../services';
import { LocationsResponse, Places } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { ClientCardComponent } from '../client-card/client-card.component';

@Component({
  selector: 'app-btn-provincias',
  standalone: true,
  imports: [CommonModule, ClientCardComponent],
  templateUrl: './btn-provincias.component.html',
  styleUrl: './btn-provincias.component.css'
})
export class BtnProvinciasComponent implements OnInit {
  private _placesService = inject(PlacesService);
  private _mapService = inject(MapService);
  private _locationService = inject(LocationService);

  private markers: Marker[] = [];
  public map?: Map;
  public places: Places[] = [];
  public locationsList: LocationsResponse[] = [];
  public hidePlaces: Boolean = false;

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  @Input() item?: LocationsResponse

  ngOnInit() {
    this.getListLocations();
  }

  ngAfterViewInit(): void {
    if (!this._placesService.userLocation)
      throw new Error('No hay placesService.userLocation');

    this.map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this._placesService.userLocation, // starting position [lng, lat]
      zoom: 8, // starting zoom
    });

    const popup = new Popup().setHTML(`
          <h3>Aqui estoy</h3>
          <p>Estoy en este lugar del Mundo</p>
        `);

    new Marker({ color: 'red' })
      .setLngLat(this._placesService.userLocation)
      .setPopup(popup)
      .addTo(this.map);

    this._mapService.setMap(this.map);
  }

  toogleLocations() {
    this.hidePlaces = !this.hidePlaces;
  }

  markersByProv(provincias?: string, color?: string) {
    if (!this.map) return;

    const newMarkers: any[] = [];
    this.places = [];
    this.locationsList.forEach((locationsList) => {

      const popup = new Popup().setHTML(`
      <h3>${locationsList.provincia}</h3>
      <p>${locationsList.title}</p>
    `);

      if (locationsList.provincia === provincias) {
        const [lng, lat] = locationsList.lngLat;

        const newMarker = new Marker({
          color: color,
          draggable: false,
        })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(this.map!);

        newMarkers.push(newMarker);
        this.places.push(locationsList);
      }
    });
    this.markers = newMarkers;
    // Limites del mapa
    if (this.markers.length === 0) return;

    const bounds = new LngLatBounds();
    newMarkers.forEach((marker) => bounds.extend(marker.getLngLat()));
    this.map.fitBounds(bounds, { padding: 200 });
  }


  flyto(place: Places) {
    //this.selectLocation = place.id
    const [lng, lat] = place.lngLat;
    this._mapService.flyto([lng, lat]);
  }

  getListLocations() {
    this._mapService
      .getLocations()
      .subscribe((locations) => (this.locationsList = locations));
  }

  getByIdPlace(id?: string) {
      if (!id) return
      this._mapService.getLocationById(id).subscribe( result => {
        this.item = result
      })
    
  }

  

  
  
}

