// app.component.ts

import { Component, OnInit } from '@angular/core';
import { Content } from './content-card/content-interface';
import { TravelDestinationService } from './services/travel-destination.service';
import { MessagesService } from './services/messages.service'; // Import MessagesService
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contentItem$: Observable<Content | undefined> = new Observable();

  constructor(
    private travelDestinationService: TravelDestinationService,
    private messagesService: MessagesService // Add MessagesService to the constructor
  ) {}

  ngOnInit() {
    this.contentItem$ = this.travelDestinationService.getContentById(1);

    this.travelDestinationService.getContent().subscribe(() => {
      this.messagesService.addMessage("Content array loaded!");
    });

    this.contentItem$.subscribe(contentItem => {
      if (contentItem) {
        this.messagesService.addMessage(`Content Item at id: ${contentItem.id}`);
      }
    });
  }
}
