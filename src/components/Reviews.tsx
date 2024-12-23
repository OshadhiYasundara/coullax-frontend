import Link from 'next/link'
import React from 'react'
import BookCardHome from './BookCardHome'


export default function Reviews() {
    const data = [
        {
            "id": 2,
            "bookTitle": "1984",
            "author": "George Orwell",
            "rating": 4,
            "reviewText": "A chilling vision of a dystopian future that feels more relevant with each passing year.",
            "dateAdded": "2024-12-23T06:27:29.582Z"
        },
        {
            "id": 3,
            "bookTitle": "Pride and Prejudice",
            "author": "Jane Austen",
            "rating": 5,
            "reviewText": "An enchanting story about love, society, and the complexity of human emotions.",
            "dateAdded": "2024-12-23T06:27:37.267Z"
        },
        {
            "id": 4,
            "bookTitle": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "rating": 3,
            "reviewText": "A deep dive into adolescent angst and rebellion, though not for everyone.",
            "dateAdded": "2024-12-23T06:27:43.298Z"
        },
        {
            "id": 1,
            "bookTitle": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "rating": 5,
            "reviewText": "A timeless story of justice and morality, with unforgettable characters and a strong message.",
            "dateAdded": "2024-12-23T06:27:16.937Z"
        },
        {
            "id": 6,
            "bookTitle": "The Hobbit",
            "author": "J.R.R. Tolkien",
            "rating": 5,
            "reviewText": "A magical journey full of adventure, bravery, and the richness of Middle-earth.",
            "dateAdded": "2024-12-23T06:30:04.264Z"
        }
    ]
  return (
    <div className='mx-20 my-10 space-y-5'>
        <div className=" flex  justify-between font-merriweather ">
            <h1 className="text-3xl font-bold text-custom-text">Reviews</h1>
            <Link href="/add-review" className='text-custom-green underline hover:text-custom-text delay-100 ease-out transition'>
                View All
            </Link>
        </div>
        {/* <div className="">
            {data.map((review) => (
                <div key={review.id} className="my-5 p-5 bg-custom-yellow rounded-xl">
                    <h2 className="text-xl font-bold text-custom-text">{review.bookTitle}</h2>
                    <p className="text-md text-custom-text">by {review.author}</p>
                    <p className="text-md text-custom-text">Rating: {review.rating}</p>
                    <p className="text-md text-custom-text">{review.reviewText}</p>
                </div>
            ))}
        </div> */}
      <div className=" flex flex-wrap gap-4">
        {data.map((review) => (
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
    </div>
  )
}
