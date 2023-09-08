var express = require("express");
var router = express.Router();
const fs = require("fs");
var path = require("path");

/* GET pictures listing. */
router.get("/", function (req, res, next) {
  //this reders the pictures file from views/pictures.ejs
  res.render("pictures");
});

router.post("/", function (req, res, next) {
  console.log(req.files);
  //file name is how this is found when posting. See below "file.name"
  const file = req.files.file;
  fs.writeFileSync(path.join(__dirname, "../pictures/", file.name), file.data);
  res.end();
});

module.exports = router;
