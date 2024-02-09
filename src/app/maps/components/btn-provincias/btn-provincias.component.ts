import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { Map, Popup, Marker, LngLatBounds } from 'mapbox-gl';
import { LocationService, MapService, PlacesService } from '../../services';
import { LocationsResponse, Places } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-provincias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-provincias.component.html',
  styleUrl: './btn-provincias.component.css'
})
export class BtnProvinciasComponent {
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

  

  markersByProv(provincias?: string, color?: string) {
   this._mapService.markersByProv(provincias, color);
  }


  flyto(place: Places) {
    //this.selectLocation = place.id
    const [lng, lat] = place.lngLat;
    this._mapService.flyto([lng, lat]);
  }

  getByIdPlace(id?: string) {
    if (!id) return
    this._locationService.getLocationById(id).subscribe( result => {
    this.item = result
    })
    }


  toogleLocations() {
      this.hidePlaces = !this.hidePlaces;
    }
    



  
}

