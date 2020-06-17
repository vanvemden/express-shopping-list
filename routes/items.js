const express = require("express")
const router = new express.Router()
const ExpressError = require("../expressError")
const items = require("../fakeDb")

// route: /items
router.get("/", function (req, res) {
  res.json(items);
})

router.post("/", function (req, res) {
  const item = {
    name: req.body.name,
    price: req.body.price
  }
  items.push(item);
  res.json({ added: { ...item } });
})


module.exports = router;