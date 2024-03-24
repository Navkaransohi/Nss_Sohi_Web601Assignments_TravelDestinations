// messages.service.ts

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messageSubject = new Subject<string>();
  messages$: Observable<string> = this.messageSubject.asObservable();

  constructor() { }

  addMessage(message: string) {
    this.messageSubject.next(message);
  }
}
