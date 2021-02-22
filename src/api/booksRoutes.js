const router = require("express").Router();
const { Book } = require("../models");

// api route: /api/books/ (get)
// description: returns list of all saved books as JSON
router.get("/", async (req, res) =>{
  console.log("Getting saved Books");
  Book.find({}).sort({ title: 1})
    .then((results)=>{
      console.log(`Results:${results}`);
      res.status(200).json(results);
    })
    .catch((error)=>{
      console.log(`Error: ${error}`);
      res.status(500).json(error);
    });
});

// api route: /api/books (post)
// description: Used to save a new book to DB
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  console.log(`Creating Book:${JSON.stringify(newBook)}`);
  Book.create(newBook)
      .then((results)=>{
          console.log(`Created Book:${results}`);
          res.status(200).json(results);
      })
      .catch((error)=>{
          console.log(`Error: ${error}`);
          res.status(500).json(error);
      });
});

// api route: /api/books/:id (delete)
// description: Used to remove a saved book from DB by Mongo "_id"
router.delete("/:id", async(req, res) =>{
  console.log(`Deleting book: ${req.params.id}`);
  Book.findByIdAndDelete(req.params.id)
    .then((response)=>{
      console.log(`Deleted Successfully:${response}`);
      res.status(200).json(response);
    })
    .catch((error)=>{
      console.log(`Error: ${error}`);
      res.status(500).json(error);
    });
});

router.get("*", (req, res) => {
  console.log("Default get Request");
    res.status(400).json({
      message: 'Bad API Request - 👋🌎🌍🌏'
    });
  });
  
module.exports = router;