const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Book = require('../models/book');
const uploadPath = path.join('public', Book.coverImageBasePath);
const Authors = require('../models/author');
const imageMineTypes = ['image/jpeg', 'image/png', 'image/gif'];
const upload = multer({
	dest: uploadPath,
	fileFilter: (req, file, callback) => {
		callback(null, imageMineTypes.includes(file.mimetype));
	}
});

// All Books Route
router.get('/', async (req, res) => {
	res.render('books/index');
});

// New Book Route
router.get('/new', async (req, res) => {
	renderNewPage(res, new Book());
});

// Create Book Route
router.post('/', upload.single('cover'), async (req, res) => {
	const fileName = req.file != null ? req.file.fieldname : null;
	const book = new Book({
		title: req.body.title,
		author: req.body.author,
		publishDate: new Date(req.body.publishDate),
		pageCount: req.body.pageCount,
		coverImageName: fileName,
		description: req.body.description
	});

	try {
		console.log('Title: ' + req.body.title);
		console.log('Author: ' + req.body.author);
		console.log('Publish Date: ' + req.body.publishDate);
		console.log('Page Count: ' + req.body.pageCount);
		console.log('Description: ' + req.body.description);
		console.log('Filename: ' + fileName);
		const newBook = await book.save();
		//res.redirect(`books/${newBook.id}`)
		res.redirect('books');
	} catch {
		// if (book.coverImageName != null) {
		// 	removeBookCover(book.coverImageName);
		// }
		renderNewPage(res, book, true);
	}
});

async function renderNewPage(res, book, hasError = false) {
	try {
		const authors = await Authors.find({});
		const params = {
			authors: authors,
			book: book
		};
		if (hasError) params.errorMessage = 'Error Creating Book';
		res.render('books/new', params);
	} catch {
		res.redirect('/books');
	}
}

module.exports = router;
