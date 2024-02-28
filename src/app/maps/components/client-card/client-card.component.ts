import { Component, Input } from '@angular/core';
import { LocationsResponse } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.css'
})
export class ClientCardComponent {

  @Input() itemHijo? : LocationsResponse;
  @Input() hidePlaces: boolean = false

  toogleLocations() {
    this.hidePlaces = !this.hidePlaces;
  }

  hideCardClient(){
    this.itemHijo = undefined
  }
}

