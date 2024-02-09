import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number]
  
  get isUserLocationReady(): boolean {
    return !!this.userLocation // los !! representa un true de que exista
  }

  constructor() {
    this.getUserLocation();
  }

  async getUserLocation(): Promise<[number, number]>{

      return new Promise( (resolve, reject) => {

        navigator.geolocation.getCurrentPosition(
          ({coords} ) =>  {
            
            this.userLocation =  [coords.longitude, coords.latitude]  // mapbox trabaja con longitud y luego latitud si fuera con googlemaps se usa de manera contraria.
            resolve( this.userLocation)
        
        },
        ( error ) => {
          alert('No se pudo obtener la geoLocation')
          console.log(error)
          reject();
        }
        );

      } )
  }
}
