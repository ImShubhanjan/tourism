import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Destination } from '../models/destination.model';

/**
 * All destination data lives in public/data/destinations.json (served from the site root as /data/destinations.json).
 * This service is the only place that reads that file — every component
 * that needs destinations goes through here, so updating the JSON
 * (swapping a "pic" URL, adding a new place, editing a description)
 * is instantly reflected everywhere it's used, with no component changes.
 */
@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private readonly dataUrl = 'data/destinations.json';
  private destinations$?: Observable<Destination[]>;

  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    if (!this.destinations$) {
      // shareReplay caches the HTTP response so multiple components
      // subscribing to this don't each trigger their own fetch.
      this.destinations$ = this.http
        .get<Destination[]>(this.dataUrl)
        .pipe(shareReplay(1));
    }
    return this.destinations$;
  }
}
