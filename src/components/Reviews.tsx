'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCardHome from "./BookCardHome";
import { Review } from "../../types/reviews";
import Loader from "./Loader";

export default function Reviews() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        const fetchReviews = async () => {
            try {
                const response = await axios.get("http://localhost:5000/reviews");
                setReviews(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching reviews:", error);
                setIsLoading(false);
            }
        };

        fetchReviews();
        
    }, []);

    // Sort by rating in descending order and select the top 5
    const bestRatedReviews = [...reviews]
        .sort((a, b) => b.rating - a.rating || new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
        .slice(0, 5);

    return (
        <div className="sm:mx-20 px-5 my-10 space-y-5">
            <div className="flex justify-between font-merriweather">
            <h1 className="text-3xl font-bold text-custom-text">Top Rated Reviews</h1>
            <Link
                href="/allreviews"
                className="text-custom-green underline hover:text-custom-text delay-100 ease-out transition"
            >
                View All
            </Link>
            </div>

            {isLoading ? (
            <Loader/>
            ) : (
                
            <div className="flex flex-wrap gap-4">
                {bestRatedReviews.map((review) => (
                <BookCardHome
                    key={review.id}
                    id={review.id}
                    bookTitle={review.bookTitle}
                    author={review.author}
                    rating={review.rating}
                    reviewText={review.reviewText}
                    dateAdded={review.dateAdded}
                />
                ))}
            </div>
            )}
            {!isLoading && bestRatedReviews.length === 0 &&  (
                <p className="text-custom-text py-20">No reviews found.</p>
            )}
        </div>
    );
}