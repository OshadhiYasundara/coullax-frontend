import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const EditReview = () => {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({
    title: "",
    author: "",
    rating: 0,
    text: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/reviews/${id}`) // Replace with your backend endpoint
        .then((res) => res.json())
        .then((data) => setForm(data))
        .catch((err) => console.error("Error fetching review:", err));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      router.push("/reviews");
    } catch (err) {
      console.error("Error updating review:", err);
    }
  };

  return (
    <div>
      <h1>Edit Review</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} required />
        <input name="author" value={form.author} onChange={handleChange} required />
        <input name="rating" type="number" min="1" max="5" value={form.rating} onChange={handleChange} required />
        <textarea name="text" value={form.text} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditReview;
