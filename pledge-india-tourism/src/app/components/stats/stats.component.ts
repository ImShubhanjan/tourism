import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Principle {
  title: string;
  body: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  principles: Principle[] = [
    {
      title: 'No packed itineraries',
      body: 'We suggest a pace, not a checklist. Every listing includes an honest "suggested stay" so you don\'t rush what deserves time.'
    },
    {
      title: 'Season-first advice',
      body: 'Best months are listed for a reason — monsoon in Ladakh and peak summer in Rajasthan both ruin a trip. We flag it upfront.'
    },
    {
      title: 'Local, not generic',
      body: 'Descriptions are written by people who\'ve actually stood there, not scraped from a brochure.'
    }
  ];
}
