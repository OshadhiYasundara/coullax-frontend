// types/reviews.d.ts

export interface Review {
    id: number;
    bookTitle: string;
    author: string;
    rating: number;
    reviewText: string;
    dateAdded: string;
  }
  
  export interface ReviewCreationData {
    bookTitle: string;
    author: string;
    rating: number;
    reviewText: string;
  }
  