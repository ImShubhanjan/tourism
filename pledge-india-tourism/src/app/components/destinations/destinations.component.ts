import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../models/destination.model';
import { DestinationService } from '../../services/destination.service';
import { DestinationCardComponent } from '../destination-card/destination-card.component';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, DestinationCardComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent implements OnInit {
  destinations: Destination[] = [];
  loading = true;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe(data => {
      this.destinations = data;
      this.loading = false;
    });
  }

  trackById(_index: number, destination: Destination): number {
    return destination.id;
  }
}
