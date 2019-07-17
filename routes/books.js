const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Authors = require('../models/author');

// All Books Route
router.get('/', async (req, res) => {
	res.render('books/index');
});

// New Book Route
router.get('/new', async (req, res) => {
	try {
		const authors = await Authors.find({});
		const book = new Book();
		res.render('books/new', {
			authors: authors,
			book: book
		});
	} catch {
		res.redirect('/books');
	}
});

// Create Book Route
router.post('/', async (req, res) => {
	res.send('Create Books');
});

module.exports = router;
