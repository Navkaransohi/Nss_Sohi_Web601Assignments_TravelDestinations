import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  @Output() contentAdded: EventEmitter<any> = new EventEmitter();
  id: number | null = null; // Initialize with null
  title: string = ''; // Initialize with an empty string
  // Add other necessary fields

  constructor() {}

  onSubmit() {
    const newContent = {
      id: this.id,
      title: this.title,
      // Add other necessary fields
    };
    this.sendContent(newContent);
  }

  sendContent(content: any) {
    // Simulating asynchronous operation
    const promise = new Promise((resolve, reject) => {
      // Assuming a successful submission for demonstration
      setTimeout(() => {
        resolve(content);
      }, 1000);
    });

    promise.then(
      (newContent: any) => { // Specify the type of newContent
        console.log('Addition is successful:', newContent.title);
        this.contentAdded.emit(newContent);
        // Clear input fields
        this.id = null;
        this.title = '';
        // Clear other input fields
      },
      () => {
        console.error('Failed to add content');
        // Handle error
      }
    );
  }
}
