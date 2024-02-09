import { Injectable } from '@angular/core';
import { LngLatLike, Map, Popup, Marker, LngLatBounds} from 'mapbox-gl'
import { Places } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  private markers: Marker[] = [];
  public places: Places[] = [];

  get isMapReady(){
    return !!this.map;
  }

  setMap( map: Map){
    this.map = map
  }

  flyto( coords: LngLatLike){
    if (!this.isMapReady) throw Error('El mapa no esta inicializado')

    this.map?.flyTo({
      zoom: 14,
      center: coords
    })
  }

  markersByProv(provincias?: string, color?: string) {
    if (!this.map) return;

    const newMarkers: any[] = [];
    this.places = [];
    this.lugares.forEach((locationsList) => {

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


  
  lugares: {_id: string, title: string, lngLat: number[], provincia: string, description: string, agente: string, telefono: number, email: string, image: string }[] = [
     
    { _id: '0', title: 'Ferreteria-Test', lngLat:[-85.2268672,10.0007936], provincia: 'San Jose', description: 'ninguna', agente: 'O10', telefono: 1324153, email: 'test@gmail.com', image: 'clodyinaryalskdad'},
    { _id: '1', title: 'Ferreteria-Test1', lngLat:[-86.2268672,10.0007936], provincia: 'San Jose', description: 'ninguna', agente: 'O10', telefono: 1324153, email: 'test@gmail.com', image: 'clodyinaryalskdad'},
    { _id: '2', title: 'Ferreteria-Test2', lngLat:[-85.2245652,13.0107936], provincia: 'San Jose', description: 'ninguna', agente: 'O10', telefono: 1324153, email: 'test@gmail.com', image: 'clodyinaryalskdad'},
    { _id: '3', title: 'Ferreteria-Test3', lngLat:[-85.4752672,12.0237936], provincia: 'San Jose', description: 'ninguna', agente: 'O10', telefono: 1324153, email: 'test@gmail.com', image: 'clodyinaryalskdad'},
    { _id: '4', title: 'Ferreteria-Test4', lngLat:[-85.2673672,12.5407936], provincia: 'San Jose', description: 'ninguna', agente: 'O10', telefono: 1324153, email: 'test@gmail.com', image: 'clodyinaryalskdad'},
    { _id: '5', title: 'Ferreteria-Test5', lngLat:[-87.2268672,10.6507936], provincia: 'San Jose', description: 'ninguna', agente: 'O10', telefono: 1324153, email: 'test@gmail.com', image: 'clodyinaryalskdad'},
    { _id: '6', title: 'Ferreteria-Test6', lngLat:[-85.2268672,13.0027936], provincia: 'San Jose', description: 'ninguna', agente: 'O10', telefono: 1324153, email: 'test@gmail.com', image: 'clodyinaryalskdad'}
  
  ]

}
