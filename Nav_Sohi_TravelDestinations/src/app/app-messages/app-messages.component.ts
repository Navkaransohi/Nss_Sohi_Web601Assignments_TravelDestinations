// app-messages.component.ts

import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.css']
})
export class AppMessagesComponent implements OnInit {
  messages: string[] = [];

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.messages$.subscribe(message => {
      this.messages.push(message);
    });
  }
}
