"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function AddReviewForm() {
  const [isLoading,setIsLoading] = useState(false);
    const [form, setForm] = useState({
        title: "",
        author: "",
        rating: "",  
        text: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      setIsLoading(true)
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/reviews", {
                bookTitle: form.title,
                author: form.author,
                rating: Number(form.rating),  // Convert string to number
                reviewText: form.text,
                dateAdded: new Date().toISOString()  // Added dateAdded field
            });
            if(res.status =201){
              setForm({
                title: "",
                author: "",
                rating: "",  
                text: ""
              });
              toast('New Review Added Succcessfully')
              
            }else{
              toast('Review Creating Failed')
              
            }
            setIsLoading(false)

        } catch (err) {
            console.error("Error adding review:", err);
            setIsLoading(false)
        }
    };

    return (
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
                    placeholder="Book Title"
                    value={form.title}
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
                    placeholder="Author"
                    value={form.author}
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
                    placeholder="Rating"
                    value={form.rating}
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
                    placeholder="Your Review"
                    value={form.text}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-custom-green rounded focus:ring-2 focus:ring-custom-green"
                />
            </div>
            <button
                type="submit"
                className="w-full font-bold text-lg bg-custom-text text-white py-2 px-4 rounded hover:opacity-90 transition duration-300"
            >
                {isLoading?"Submitting":"Submit"}
            </button>
        </form>
    );
}