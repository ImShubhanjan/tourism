import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../models/destination.model';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent implements OnInit {
  spotlight?: Destination;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe(destinations => {
      const featuredList = destinations.filter(d => d.featured);
      // Show the second featured pick here so it differs from the hero backdrop.
      this.spotlight = featuredList[1] ?? featuredList[0] ?? destinations[0];
    });
  }
}
