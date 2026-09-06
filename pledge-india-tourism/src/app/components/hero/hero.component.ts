import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../models/destination.model';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  destinationCount = 0;
  stateCount = 0;
  averageRating = 0;
  /** Backdrop image comes straight from the JSON data — change "pic" there and this updates. */
  backdropUrl = '';

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe((destinations: Destination[]) => {
      this.destinationCount = destinations.length;
      this.stateCount = new Set(destinations.map(d => d.state)).size;
      const totalRating = destinations.reduce((sum, d) => sum + d.rating, 0);
      this.averageRating = destinations.length ? totalRating / destinations.length : 0;

      const heroPick = destinations.find(d => d.featured) ?? destinations[0];
      this.backdropUrl = heroPick?.pic ?? '';
    });
  }
}
