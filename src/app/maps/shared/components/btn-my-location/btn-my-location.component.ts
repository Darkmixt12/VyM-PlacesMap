import { Component, inject } from '@angular/core';
import { MapService, PlacesService } from '../../../services';

@Component({
  selector: 'app-btn-my-location',
  standalone: true,
  imports: [],
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  private mapService = inject(MapService);
  private placeService = inject(PlacesService);


  goToMyLocation(){

    if ( !this.placeService.isUserLocationReady) throw Error('No hay ubicacion de usuario')

    this.mapService.flyto(this.placeService.userLocation!)
  }
}
