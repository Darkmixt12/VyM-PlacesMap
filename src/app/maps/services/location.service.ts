import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environments";
import { LocationsResponse } from "../interfaces";

@Injectable({
	providedIn: 'root'
  })
  export class LocationService {

	private readonly baseUrl: string = environment.baseUrl;
	private readonly urlImg = `${this.baseUrl}/files/cloudinary`
	private readonly url = `${this.baseUrl}/locations/`


	private http = inject(HttpClient);

	


	
	getLocationById(id: string): Observable<LocationsResponse>{

		let headers = new HttpHeaders().set('Content-Type', 'application/json')
		return	this.http.get<LocationsResponse>(this.url+'place/'+id,{headers})
	}


	
  }
