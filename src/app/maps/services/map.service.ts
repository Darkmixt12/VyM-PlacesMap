import { Injectable, inject } from '@angular/core';
import { LngLatLike, Map} from 'mapbox-gl'
import { LocationsResponse, Places } from '../interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  public placesService: Places[] = [];
  private http = inject(HttpClient);

  private readonly baseUrl: string = environment.baseUrl;
	url = `${this.baseUrl}/locations/`

  get isMapReady(){
    return !!this.map;
  }

  setMap( map: Map){
    this.map = map
  }

  getLocations(): Observable<LocationsResponse[]>{

		let headers = new HttpHeaders().set('Content-Type', 'application/json')

		return	this.http.get<LocationsResponse[]>(this.url+'list',{headers})
	}

  getLocationById(id: string): Observable<LocationsResponse>{

		let headers = new HttpHeaders().set('Content-Type', 'application/json')
		return	this.http.get<LocationsResponse>(this.url+'place/'+id,{headers})
	}

  flyto( coords: LngLatLike){
    if (!this.isMapReady) throw Error('El mapa no esta inicializado')

    this.map?.flyTo({
      zoom: 14,
      center: coords
    })
  }

}
