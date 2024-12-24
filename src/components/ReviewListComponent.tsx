import React from 'react'
import { Review } from '../../types/reviews'
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { toast } from "sonner"

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
import axios from 'axios';

export default function ReviewListComponent({review}:{review:Review}) {
  const deleteReview = async () => {  
    try {
      const res = await axios.delete(`http://localhost:5000/reviews/${review.id}`);
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
    <div
              key={review.id}
              className="my-5 p-5 bg-custom-yellow rounded-xl"
            >
              <h2 className="text-xl font-bold text-custom-text">
                {review.bookTitle}
              </h2>
              <p className="text-md text-custom-text">
                Author: {review.author}
              </p>
              <div className="flex items-center mb-2">
                <span className="mr-2 text-sm font-medium text-gray-700">
                  Rating:
                </span>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-md text-custom-text">{review.reviewText}</p>
              <p className="text-sm text-custom-text mt-3">
                Date Added: {new Date(review.dateAdded).toDateString()}
              </p>

              <div className="my-3">
                <Link
                  href={`/editreview/${review.id}`}
                  className=" ease-in-out delay-100 transition bg-custom-text rounded text-white p-2  mr-2 hover:bg-yellow-600"
                >
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
              </div>
            </div>
  )
}
