var express = require("express");
var router = express.Router();
const fs = require("fs");
var path = require("path");

/* GET pictures listing. */
router.get("/", function (req, res, next) {
  const pictures = fs.readdirSync(path.join(__dirname, "../pictures/"));
  res.render("pictures", { pictures: pictures });
});

router.post("/", function (req, res, next) {
  console.log(req.files);
  res.end();
});

module.exports = router;
