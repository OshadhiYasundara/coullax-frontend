import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Review } from "../../types/reviews";
import Link from "next/link";
import { FaStar } from "react-icons/fa"; 
export default function BookCardHome({
  id,
  bookTitle,
  author,
  rating,
  reviewText,
  dateAdded,
}: Review) {
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
    <Card className="shadow-lg hover:shadow-2xl transition-shadow border border-gray-200  bg-gray-100 rounded-lg">
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
        <Link href={"g"} className=" ease-in-out delay-100 transition bg-custom-text rounded text-white p-2  mr-2 hover:bg-yellow-600">
          Edit
        </Link>
        <Link href={"gh"} className="ease-in-out delay-100 transition rounded  text-custom-text p-2 hover:text-white hover:bg-red-900">
          Delete
        </Link>
      </CardFooter>
    </Card>
  );
}
