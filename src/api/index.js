const express = require('express');

const emojis = require('./emojis');

const router = express.Router();
const booksRoutes = require("./booksRoutes");

router.use("/books", booksRoutes);
router.use('/emojis', emojis);

module.exports = router;
