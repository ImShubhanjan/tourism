import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { IntroComponent } from './components/intro/intro.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { StatsComponent } from './components/stats/stats.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    IntroComponent,
    DestinationsComponent,
    FeaturedComponent,
    StatsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pledge India Tourism';
}
