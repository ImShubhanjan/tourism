import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})
export class DestinationCardComponent {
  /**
   * The whole card is driven by this one object coming from destinations.json.
   * Nothing here is hard-coded — swap "pic", "name", "rating" etc. in the JSON
   * and every card using that record updates automatically.
   */
  @Input({ required: true }) destination!: Destination;
}
