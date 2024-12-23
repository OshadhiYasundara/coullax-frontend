import React, { useState } from "react";
import { useRouter } from "next/router";

const AddReview = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    author: "",
    rating: 0,
    text: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      router.push("/reviews");
    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  return (
    <div>
      <h1>Add a Book Review</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Book Title" onChange={handleChange} required />
        <input name="author" placeholder="Author" onChange={handleChange} required />
        <input name="rating" type="number" min="1" max="5" placeholder="Rating" onChange={handleChange} required />
        <textarea name="text" placeholder="Your Review" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
