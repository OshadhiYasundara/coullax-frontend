"use client";

import React, { use, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Footer from "@/components/Footer";
import axios from "axios";
import { toast } from "sonner";
import Loader from "@/components/Loader";

const EditReview = () => {
   const [isLoading,setIsLoading] = useState(true);
   const [isSubmitting,setIssubmitting] = useState(false);
  const router = useRouter();
  const params = useParams(); // Use this to get path parameters
  const id = params.id; // Retrieve the `id` from the URL
  const [form, setForm] = useState({
    title: "",
    author: "",
    rating: 0,
    text: "",
  });

  useEffect(() => {
    const fetchReview = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/reviews/${id}`);
        if (res.status === 200) {
          const review = res.data;
          setForm({
            title: review.bookTitle,
            author: review.author,
            rating: review.rating,
            text: review.reviewText,
          });
        }
      } catch (err) {
        console.error("Error fetching review:", err);
      }
      setIsLoading(false);
    };
    fetchReview();
  },[id])

             


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIssubmitting(true)
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/reviews/${id}`, {
        bookTitle: form.title,
        author: form.author,
        rating: Number(form.rating), // Convert string to number
        reviewText: form.text,
      });
      if (res.status === 200) {
        toast("review updated successfully");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        router.push("/allreviews");
      }else{
        toast("updating review failed")
      }
      setIssubmitting(false);
    } catch (err) {
      console.error("Error updating review:", err);
    }
  };
  if(isLoading){
    return <Loader/>
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center py-20  bg-custom-yellow">
        <h1 className="text-3xl font-merriweather text-custom-text mb-6">
          Edit Review
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="mb-4">
            <label className="block text-custom-text font-semibold mb-2">
              Book Title
            </label>
            <input
              name="title"
              value={form.title}
              placeholder="Book Title"
              onChange={handleChange}
              required
              className="w-full p-2 border border-custom-green rounded focus:ring-2 focus:ring-custom-green"
            />
          </div>
          <div className="mb-4">
            <label className="block text-custom-text font-semibold mb-2">
              Author
            </label>
            <input
              name="author"
              value={form.author}
              placeholder="Author"
              onChange={handleChange}
              required
              className="w-full p-2 border border-custom-green rounded focus:ring-2 focus:ring-custom-green"
            />
          </div>
          <div className="mb-4">
            <label className="block text-custom-text font-semibold mb-2">
              Rating (1-5)
            </label>
            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              value={form.rating}
              placeholder="Rating"
              onChange={handleChange}
              required
              className="w-full p-2 border border-custom-green rounded focus:ring-2 focus:ring-custom-green"
            />
          </div>
          <div className="mb-4">
            <label className="block text-custom-text font-semibold mb-2">
              Your Review
            </label>
            <textarea
              name="text"
              value={form.text}
              placeholder="Your Review"
              onChange={handleChange}
              required
              className="w-full p-2 border border-custom-green rounded focus:ring-2 focus:ring-custom-green"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-custom-text text-white py-2 px-4 rounded hover:opacity-90 transition duration-300"
          >
           
            {isSubmitting?"Updating...":"Update"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditReview;
