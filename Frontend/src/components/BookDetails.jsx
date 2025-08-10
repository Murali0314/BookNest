import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4001/api/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch book");
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!book) return <p>Book not found</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 shadow-md rounded-md">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={book.image}
          alt={book.title}
          className="w-[200px] h-[300px] object-contain rounded shadow-md border"
        />

        <div>
          <h1 className="text-4xl font-bold mb-2 text-gray-800">{book.title}</h1>
          <p className="text-sm text-indigo-400 italic mb-1">Category: {book.category}</p>
          <p className="text-xl mt-2 font-semibold text-green-700">Price: ${book.price}</p>

         
          <div className="mt-4 text-gray-700 space-y-4 book-description">
            <div dangerouslySetInnerHTML={{ __html: book.description }} />
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
