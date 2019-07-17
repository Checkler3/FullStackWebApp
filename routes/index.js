const express = require('express');
const router = express.Router();


// Route to display index page
router.get('/', (req, res) => {
	res.render('index');
});

module.exports = router;
