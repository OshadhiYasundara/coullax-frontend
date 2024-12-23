import React, { useEffect, useState } from "react";

interface Review {
  id: number;
  title: string;
  author: string;
  rating: number;
  text: string;
  dateAdded: string;
}

const AllReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/reviews") // Replace with your backend endpoint
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <div>
      <h1>All Book Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.title}</h3>
            <p>Author: {review.author}</p>
            <p>Rating: {review.rating}/5</p>
            <p>{review.text}</p>
            <p>Date: {new Date(review.dateAdded).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllReviews;
