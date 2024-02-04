import { Component, Input } from '@angular/core';
import { Content } from './content-interface'; // Import Content interface if needed

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent {
 @Input() contentItem: Content | undefined;
}