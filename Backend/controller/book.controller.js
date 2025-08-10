import Book from "../model/book.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Correct path to list.json (same folder as controller)
const bookListPath = path.join(__dirname, "list.json");
const bookList = JSON.parse(fs.readFileSync(bookListPath, "utf-8"));

// Get all books
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};

// Bulk insert from list.json
export const bulkAddBooks = async (req, res) => {
  try {
    await Book.deleteMany({});
    const insertedBooks = await Book.insertMany(bookList);
    res.status(201).json({
      message: "Books added successfully",
      count: insertedBooks.length
    });
  } catch (error) {
    res.status(500).json({ message: "Error inserting books", error });
  }
};
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error });
  }
};

