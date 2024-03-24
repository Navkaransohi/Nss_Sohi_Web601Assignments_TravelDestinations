// travel-destination.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../content-card/content-interface';
import { contentDb } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class TravelDestinationService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(contentDb);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const content = contentDb.find(item => item.id === id);
    return of(content);
  }
}
