"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ReviewListComponent from "@/components/ReviewListComponent";
import { Review } from "../../../types/reviews";
import axios from "axios";
import Loader from "@/components/Loader";

const AllReviews = () => {
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

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date"); // Default sorting by date

  // Handle Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle Sort
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setReviews((prevReviews) =>
      [...prevReviews].sort((a, b) => {
        if (e.target.value === "date") {
          return (
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
          );
        } else if (e.target.value === "rating") {
          return b.rating - a.rating;
        }
        return 0;
      })
    );
  };

  // Filter Reviews by Search Term
  const filteredReviews = reviews.filter((review) =>
    review.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="m-5 sm:m-20">
        <div className="flex flex-col sm:flex-row justify-between items-center font-merriweather mb-5">
          <h1 className="text-3xl font-bold text-custom-text">All Reviews</h1>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 border border-custom-green rounded  "
            />
            {/* Sort Dropdown */}
            <select
              value={sortOption}
              onChange={handleSort}
              className="p-2 border border-custom-green rounded  "
            >
              <option value="date" className="">
                Sort by Date
              </option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
        </div>

        {/* Review List */}
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="">
              {filteredReviews.map((review) => (
                <ReviewListComponent key={review.id} review={review} />
              ))}
            </div>
          )}

          {!isLoading && filteredReviews.length === 0 && (
            <p className="text-custom-text py-20">No reviews found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllReviews;
