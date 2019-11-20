const router = require("express").Router();

const controller = require("../controller");



router.get("/json",controller.handleJSON);

router.get("/text",controller.handleTEXT);

router.get("/html",controller.handleHTML);

module.exports = router;