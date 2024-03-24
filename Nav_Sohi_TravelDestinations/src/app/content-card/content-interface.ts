// content-interface.ts

export interface Content {
  id: number; // Assuming there's an ID field in your content items
  title: string;
  description: string; // Assuming this corresponds to the 'body' property
  creator: string; // Assuming this corresponds to the 'author' property
  imgURL?: string; // Assuming this corresponds to the 'imgURL' property
  type: string; // Assuming this corresponds to the 'type' property
  tags: string[]; // Assuming this corresponds to the 'tags' property
  date?: string; // Assuming this corresponds to the 'date' property
}
