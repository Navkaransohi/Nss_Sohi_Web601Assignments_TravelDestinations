import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit {
  contentList: Content[]= [];

  ngOnInit(): void {
    this.contentList=[{
      id:1,
      title: 'Golden Horizon Retreat',
      description: 'Experience of party in the ship ',
      creator: 'Scout relaxed',
      imgURL: 'assets/images/golden.jpeg',
      type: 'Sea',
      tags: ['Travel', 'Sea']
    },{
      id:2,
      title: 'Sun-Kissed Serenade',
      description: 'Enjoying the sun rise at the beach',
      creator: 'P. Rhythms',
      imgURL: 'assets/images/sun.jpg',
      type: 'Beach',
      tags: ['Travel', 'Beach']
    },
    {
      id: 3,
      title: 'Mountain Majesty',
      description: 'Embark on a journey to the breathtaking mountain peaks.',
      creator: 'Alex Adventurer',
      imgURL: 'assets/images/mountain.jpeg',
      type: 'Adventure',
      tags: ['Travel', 'Adventure', 'Nature']
    },
    {
      id: 4,
      title: 'City Skyline Exploration',
      description: 'Discover the bustling cityscape with its iconic landmarks.',
      creator: 'Tom Urbanite',
      imgURL: 'assets/images/skyline.jpeg',
      type: 'City',
      tags: ['Travel', 'City']
    },
    {
      id: 5,
      title: 'Beach Paradise',
      description: 'Relax on the sandy shores with a stunning view of the ocean.',
      creator: 'Sara Seaside',
      imgURL: 'assets/images/beach.jpeg',
      type: 'Nature',
      tags: ['Travel', 'Nature', 'Relaxation']
    },
    {
      id: 6,
      title: 'Sunflower Fields',
      description: 'Get lost in the vibrant fields of blooming sunflowers.',
      creator: 'Flora Fieldsman',
      imgURL: 'assets/images/sunflower.jpg',
      type: 'Nature',
      tags: ['Nature', 'Flowers']
    },
  ]
  }
  isFirstCard(index: number): boolean {
    return index === 0;
  }

}