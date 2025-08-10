import express from 'express';
import { getBook, bulkAddBooks, getBookById } from '../controller/book.controller.js';

const router = express.Router();

router.get("/", getBook);
router.get("/:id", getBookById); // <-- Added this line
router.post("/bulk", bulkAddBooks);

export default router;
