import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { LoadingMapComponent } from '../../components/loading-map/loading-map.component';
import { CommonModule } from '@angular/common';
import { BtnMyLocationComponent } from '../../shared/components/btn-my-location/btn-my-location.component';
import { BtnProvinciasComponent } from '../../components/btn-provincias/btn-provincias.component';

@Component({
  selector: 'app-maps-page',
  standalone: true,
  imports: [LoadingMapComponent, CommonModule, BtnMyLocationComponent, BtnProvinciasComponent],
  templateUrl: './maps-page.component.html',
  styleUrl: './maps-page.component.css'
})
export default class MapsPageComponent {

  private placesService = inject(PlacesService)

  constructor(){}


  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }

}
