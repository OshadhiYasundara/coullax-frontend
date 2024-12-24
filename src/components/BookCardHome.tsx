'use client'
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Review } from "../../types/reviews";
import Link from "next/link";
import { FaStar } from "react-icons/fa"; 
import axios from "axios";
import { toast } from "sonner";
export default function BookCardHome({
  id,
  bookTitle,
  author,
  rating,
  reviewText,
  dateAdded,
}: Review) {

  const deleteReview = async () => {  
    try {
      const res = await axios.delete(`http://localhost:5000/reviews/${id}`);
      if (res.status === 200) {
        toast("Review deleted successfully")
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.reload();
      }
    } catch (err) {
      console.error("Error deleting review:", err
      );
    }
  }
  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="my-5 shadow-lg hover:shadow-2xl transition-shadow border border-gray-200  bg-gray-100 rounded-lg">
      <CardHeader className=" p-4 rounded-t-lg">
        <CardTitle className="text-xl font-semibold text-gray-800">{bookTitle}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          Author: {author}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <span className="mr-2 text-sm font-medium text-gray-700">Rating:</span>
          <div className="flex">{renderStars(rating)}</div>
        </div>
        <p className="text-md text-gray-700 mb-3">{reviewText}</p>
        <p className="text-sm text-gray-500">{new Date(dateAdded).toLocaleDateString()}</p>
      </CardContent>

      <CardFooter>
        <Link href={`/editreview/${id}`} className=" ease-in-out delay-100 transition bg-custom-text rounded text-white p-2  mr-2 hover:bg-yellow-600">
          Edit
        </Link>
        
        <AlertDialog>
  <AlertDialogTrigger><div className="ease-in-out delay-100 transition rounded  text-custom-text p-2 hover:text-white hover:bg-red-900">
          Delete
        </div></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete the review.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={deleteReview}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

      </CardFooter>
    </Card>
  );
}
