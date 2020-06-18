const express = require("express")
const router = new express.Router()
const ExpressError = require("../expressError")
const items = require("../fakeDb")

// route: /items
router.get("/", function (req, res) {
  res.json(items);
})
// route: add an item to items
router.post("/", function (req, res) {
  const item = {
    name: req.body.name,
    price: req.body.price
  }
  items.push(item);
  res.status(201).json({ added: { ...item } });
})
// route: find an item from the items list.
router.get("/:name", function (req, res) {
  let item = items.find(function(val){
    return val.name === req.params.name;
  })
  res.json(item);
});
// route: update an item's name and/or price.
router.patch("/:name", function (req,res) {
  const item = {
    name: req.body.name,
    price: req.body.price
  }
  items.find(function(val){
    if(val.name === req.params.name) {
      val.name = item.name;
      val.price = item.price;
      res.json({ updated: { ...item } });
    }
  })
  console.log(item);
});
//route: delete an item.
router.delete("/:name", function(req, res) {
  let index = items.findIndex(function(val){
    return val.name === req.params.name;
  })
  console.log(index);
  items.splice(index, 1);
  console.log(items);
  res.json({ message: "Deleted" });

});

module.exports = router;