// content-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-interface';
import { TravelDestinationService } from '../services/travel-destination.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentList: Content[] = [];
  searchTitle: string = '';
  searchMessage: string = '';
  searchMessageColor: string = ' ';

  constructor(private travelDestinationService: TravelDestinationService) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    this.travelDestinationService.getContent()
      .subscribe(content => this.contentList = content);
  }

  searchContent() {
    const foundContent = this.contentList.find(content => content.title === this.searchTitle);
    if (foundContent) {
      this.searchMessage = `Content with title '${this.searchTitle}' exists.`;
      this.searchMessageColor = 'green';
    } else {
      this.searchMessage = `Content with title '${this.searchTitle}' does not exist.`;
      this.searchMessageColor = 'red';
    }
  }

  isFirstCard(index: number): boolean {
    return index === 0;
  }
}
