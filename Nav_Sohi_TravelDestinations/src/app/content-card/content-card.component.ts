import { Component, Input } from '@angular/core';
import { Content } from './content-interface'; // Import Content interface if needed

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent {
 @Input() contentItem: Content | undefined;
 @Input () typeClass: string | undefined;

 getCardTypeClass(type: string | undefined): string {
  if (type == undefined) {
    return'';}
    switch (type) {
      case 'Sea':
        return 'card-type-sea';
      case 'Beach':
        return 'card-type-beach';
      case 'Adventure':
        return 'card-type-adventure';
    // Add additional cases for other content types
    default:
      return '';
  }
}
  handleClick() {
  console.log('Content card clicked:', this.contentItem);
  }
 
}